//DNS: Domain Name Sysytem.,
// import dns from 'dns';
// const hostname: string = "myservices.netlify.app"
// // const hostname: string = "google.com"
// //lookup() coberts the domain name to the ip address specifically ipv4 (to readable numbers for the machine)..
// dns.lookup(hostname, function(err, address, family){
//     if(err){
//         console.log("Wrong input");
//         return;
//     };
//     console.log("Address:", address)
//     console.log("family:", family)
// })
// //resolve for ipv4
// dns.resolve(hostname, function(err, address){
//     if(err){
//         console.log("Wrong input v4");
//         return;
//     };
//     console.log("ipv4 Address:", address)
// })
// //resolve6 for ipv6
// dns.resolve6(hostname, function(err, address){
//     if(err){
//         console.log("Wrong input v6");
//         return;
//     };
//     console.log("ipv6 Address:", address)
// })
// console.log(dns)