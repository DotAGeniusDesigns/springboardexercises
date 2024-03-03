// - What is HTTP?
It's an application layer protocol that transfer information between networked devices
// - What is a URL?
It's an address of something on the Web
// - What is DNS?
It's a machine language version of domain names
// - What is a query string?
It's the part of the URL that assigns values to properties
// - What are two HTTP verbs and how are they different?
GET requests data without changing anything, while POST sends data to a server to create or update something
// - What is an HTTP request?
It's a message sent from a client to server to request something
// - What is an HTTP response?
It's the answer from the server to the client
// - What is an HTTP header? Give a couple examples of request and response headers you have seen.
It's something that allows the client and server to pass additional information for requests and responses. Examples include host and cookie
// - What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
URL Parsing, DNS lookup, establishing a connection, HTTP request, HTTP Response, rendering page

curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"
dig icanhazdadjoke.com
