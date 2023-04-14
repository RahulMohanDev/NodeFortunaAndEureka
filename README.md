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