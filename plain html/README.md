## Plain html with the help of CDN (Content Delivery Network)

- CDN is distributed network of servers that speeds up the delivery of web content by caching it in this case for using react we need a simple HTML file that includes React & ReactDOM via CDN, plus Babel to allow JSX.

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

then you will need to write all your JS in a script tag using type babel for the browser to read JSX:

```js
<script type="text/babel">
  function App() {
    return <h1>Hello World</h1>;
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
```

the good thing is that it doesnt need any setup and it is generally able to run in any browser.

the bad thing is that it considerd a slower method and you dont have any version control over the react app you are writing and much more cons.

why it doesnt support TypeScript? because TS needs to be compiled before running which in-browser setup like Babel doesnt do.
