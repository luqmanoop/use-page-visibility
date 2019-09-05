# use-page-visibility

Dead-simple, zero-config React hook lib for detecting page visibility 👁️

## Demo
https://use-page-visibility.netlify.com

## Prerequisite

- [React 16.8+](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)

## Installation

```bash
npm install use-page-visibility
```

or with yarn

```bash
yarn add use-page-visibility
```

## Usage

```jsx
...
import usePageVisibility from 'use-page-visibility';

function App() {
  const handleVisibilityChange = (visible) => {
    if (visible) playVideo();
    else pauseVideo();
  }

  usePageVisibility(handleVisibilityChange); 

  return ...
}
```

## Api

`usePageVisibility(fn, delay)`

### fn

Type: `function`

Callback function to run when page visibility changes. A boolean value (indicating whether the page is visible or not) will be passed as an argument to this function.

### delay (optional)

Type: `number`

Number of milliseconds to wait before responding to page visibility change

## Related

- [react-thanos](https://github.com/codeshifu/react-thanos) - React hooks implementation of Google's "Thanos" easter egg

## Author

[Olushi Luqman Opemipo](https://twitter.com/codeshifu)

## License

This project is licensed under [MIT](https://github.com/codeshifu/use-page-visibility/blob/master/LICENSE)
