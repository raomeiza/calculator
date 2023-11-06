const host = window.location
console.log(host)
let apiRootUrl: string;
if (host.hostname.startsWith('192.168.') || host.hostname.startsWith('127.0.0.1') || host.hostname.startsWith('localhost')) { // the 3 types of local server
  apiRootUrl = `${host.protocol}//${host.hostname}:5000`
} else {
  apiRootUrl = 'https://calc-server-f8vm.onrender.com'
}
console.log('uuuuuu', apiRootUrl)
export { apiRootUrl }