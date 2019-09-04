# use-page-visibility
Dead-simple, zero-config React hook lib for detecting page visibility 👁️

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
  const pageVisible = usePageVisibility(); // returns a boolean

  return pageVisible ? 'Play video' : 'Pause video';
}
```

## Api
`usePageVisibility(delay)`
### delay
Type: `number`

Number of milliseconds to wait before responding to page visibility change

## Related
- [react-thanos](https://github.com/codeshifu/react-thanos) - React hooks implementation of Google's "Thanos" easter egg

## Author
[Olushi Luqman Opemipo](https://twitter.com/codeshifu)

## License
This project is licensed under [MIT](https://github.com/codeshifu/use-page-visibility/blob/master/LICENSE)
