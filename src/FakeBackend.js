import states from './states.json'
  
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.startsWith('/names') && method === 'GET':
                        return getStates();
                    case url.match(/\/names\/\d+$/) && method === 'DELETE':
                        return deleteState();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                             .then(response => resolve(response))
                             .catch(error => reject(error));
                }
            }

            // route functions
   
            function getStates() {
                const urlParts = url.split('/');
                let search = '';
                let limit = 10;
                const query = urlParts[2].slice(1);
                var vars = query.split("&");
                for (var i=0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] === 'search') {
                        search = pair[1];
                    }
                    else if (pair[0] === 'limit') {
                        limit = parseInt(pair[1]);
                    }
                }
                const filtered = states
                    .filter(state => state.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
                    .slice(0, limit)
                return ok(filtered);
            }
    
            function deleteState() {
                states = states.filter(x => x.id !== idFromUrl());
                localStorage.setItem('states', JSON.stringify(states));
                return ok();
            }

            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}