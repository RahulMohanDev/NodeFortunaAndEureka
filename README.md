# NodeFortunaAndEureka
Node code for Fortuna and Eureka


all the os modules
OS

Here are some of the methods available in this module:

- **`os.arch()`**: Returns the operating system CPU architecture.
- **`os.cpus()`**: Returns an array of objects containing information about each CPU/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in various states).
- **`os.freemem()`**: Returns the amount of free system memory in bytes.
- **`os.hostname()`**: Returns the hostname of the operating system.
- **`os.loadavg()`**: Returns an array containing the 1, 5, and 15 minute load averages.
- **`os.networkInterfaces()`**: Returns an object containing information about each network interface installed on the system.
- **`os.platform()`**: Returns the operating system platform (e.g., ‘darwin’, ‘freebsd’, ‘linux’, ‘sunos’, ‘win32’).
- **`os.release()`**: Returns the operating system release.
- **`os.tmpdir()`**: Returns the operating system’s default directory for temporary files.
- **`os.totalmem()`**: Returns the total amount of system memory in bytes.



The **`fs`** (file system) module in Node.js provides a wide range of methods for working with files and directories. Here are some of the most commonly used methods:

1. **`fs.readFile()`**: Reads the contents of a file asynchronously and returns the data as a buffer or string.
2. **`fs.writeFile()`**: Writes data to a file asynchronously, overwriting the file if it already exists.
3. **`fs.appendFile()`**: Appends data to a file asynchronously, creating the file if it does not exist.
4. **`fs.mkdir()`**: Creates a new directory asynchronously.
5. **`fs.readdir()`**: Reads the contents of a directory asynchronously and returns an array of filenames.
6. **`fs.stat()`**: Returns information about a file or directory asynchronously, including its size, permissions, and creation/modification times.
7. **`fs.rename()`**: Renames a file or directory asynchronously.
8. **`fs.unlink()`**: Deletes a file asynchronously.
9. **`fs.rmdir()`**: Deletes a directory asynchronously, if it is empty.
10. **`fs.watch()`**: Watches a file or directory for changes and triggers a callback function when a change occurs.
# Events
In Node.js, the **`events`** module provides a way to create and emit custom events. Here's an example of how to use the **`events`** module to create an event emitter and emit events:

In this example, we first import the **`events`** module and create a class that extends the **`EventEmitter`** class provided by the module. We then create an instance of our custom event emitter.

We use the **`on()`** method to register a listener function for the **`'event'`** event. The listener function takes one argument, which is the argument passed to the **`emit()`** method.

We then use the **`emit()`** method to emit the **`'event'`** event, passing **`'Hello, world!'`** as the argument.

When the **`'event'`** event is emitted, the listener function is called with the argument **`'Hello, world!'`**, and the message **`'Event occurred with argument: Hello, world!'`** is displayed in the console.

Note that you can register multiple listener functions for the same event by calling the **`on()`** method multiple times with the same event name. You can also remove listener functions using the **`removeListener()`** method or remove all listener functions for a given event using the **`removeAllListeners()`** method.
# Http Module
The **`http`** module in Node.js provides a way to create HTTP servers and make HTTP requests. Here's an example of how to create an HTTP server using the **`http`** module:

```
javascriptCopy code
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

```

In this example, we first import the **`http`** module. We then create an HTTP server using the **`createServer()`** method, which takes a callback function that will be called for each incoming request. The callback function takes two arguments: **`req`**, which is the request object, and **`res`**, which is the response object.

Inside the callback function, we set the status code of the response to 200 using **`res.statusCode`**, set the content type of the response to plain text using **`res.setHeader()`**, and write the response body using **`res.end()`**.

We then use the **`listen()`** method to start the server and listen for incoming requests on port 3000. When the server starts, the message **`'Server running at http://localhost:3000/'`** is displayed in the console.

You can also make HTTP requests using the **`http`** module. Here's an example of how to make an HTTP GET request:

```
javascriptCopy code
const http = require('http');

http.get('http://www.example.com/', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  res.on('data', (chunk) => {
    console.log(`Data received: ${chunk}`);
  });
}).on('error', (err) => {
  console.log(`Error: ${err.message}`);
});

```

In this example, we use the **`http.get()`** method to make an HTTP GET request to **`'http://www.example.com/'`**. The method takes two arguments: the URL to request, and a callback function that will be called when the response is received.

The callback function takes one argument, which is the response object. We log the status code of the response to the console using **`res.statusCode`**, and then set up a listener for the **`'data'`** event using **`res.on()`**. The **`'data'`** event is emitted when a chunk of data is received from the server. In the listener function, we log the received data to the console using **`console.log()`**.

Finally, we use the **`on()`** method to set up a listener for the **`'error'`** event, which is emitted if an error occurs while making the request. In the listener function, we log the error message to the console.


# Buffer

In Node.js, the **`Buffer`** class provides a way to handle binary data. The **`Buffer`** class can be used to represent raw binary data in several different encodings, including:

- **`utf8`**: The default encoding for Node.js **`Buffer`** objects. This encoding can represent Unicode characters using one to four bytes per character.
- **`utf16le`**: A two-byte encoding for Unicode characters, with the least significant byte first (little-endian).
- **`ucs2`** or **`utf16be`**: A two-byte encoding for Unicode characters, with the most significant byte first (big-endian).
- **`latin1`** or **`binary`**: A one-byte encoding that can represent all 256 possible byte values.
- **`base64`**: A binary-to-text encoding that uses 64 ASCII characters to represent every 6 bits of binary data.
- **`hex`**: A binary-to-text encoding that uses hexadecimal digits (0-9, A-F) to represent each byte of binary data.

You can create a new **`Buffer`** object by calling the **`Buffer.from()`** method, passing in the input data and the encoding type as arguments. For example, to create a **`Buffer`** object from a string in UTF-8 encoding:

```
javascriptCopy code
const str = 'hello world';
const buffer = Buffer.from(str, 'utf8');

```

You can also create a new **`Buffer`** object by calling the **`Buffer.alloc()`** method, passing in the size of the buffer (in bytes) as an argument. For example, to create a **`Buffer`** object of size 10:

```
javascriptCopy code
const buffer = Buffer.alloc(10);

```

The **`Buffer`** class provides methods for manipulating binary data, including copying, slicing, and concatenating buffers, as well as converting buffers to other data types like strings or JSON.


# Why use buffer.from(chunk) if chuck is already a buffer


You are correct that if **`chunk`** is already a **`Buffer`** object, there is no need to use **`Buffer.from(chunk)`** to create a new **`Buffer`** object.

The **`Buffer.from()`** method is used to create a new **`Buffer`** object from a given input, which can be a string, an array, a typed array, or another **`Buffer`** object.

If **`chunk`** is already a **`Buffer`** object, you can simply use **`chunk`** directly without needing to create a new **`Buffer`** object using **`Buffer.from()`**.

However, if **`chunk`** is not a **`Buffer`** object, you can use **`Buffer.from()`** to create a new **`Buffer`** object from the input data.

For example, if you receive data in the form of a string, you can use **`Buffer.from(string)`** to create a new **`Buffer`** object from the string data.

So, in summary, if **`chunk`** is already a **`Buffer`** object, there is no need to use **`Buffer.from(chunk)`** to create a new **`Buffer`** object, but if **`chunk`** is not a **`Buffer`** object, **`Buffer.from()`** can be used to create one.