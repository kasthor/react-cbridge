# react-cbridge

> CBridge connector

[![NPM](https://img.shields.io/npm/v/react-cbridge.svg)](https://www.npmjs.com/package/react-cbridge) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cbridge
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'react-cbridge'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [kasthor](https://github.com/kasthor)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
