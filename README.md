# simple-vertical-timeline

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/simple-vertical-timeline.svg)](https://www.npmjs.com/package/simple-vertical-timeline) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-vertical-timeline
```

## Usage

```jsx
import React, { Component } from 'react'

import Timeline from 'simple-vertical-timeline'
import 'simple-vertical-timeline/dist/index.css'

class Example extends Component {
  render() {
    return <Timeline />
  }
}
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th style="width: 200px;">type</th>
        <th>default</th>
        <th>description</th>
        <th style="width: 200px;">example</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>values</td>
          <td>
<pre>
[
  {
    from: String,
    to: String,
    title: String,
    description: String
  },
  {
    from: String,
    to: String,
    title: String,
    description: String
  }
  ...
]
</pre>
          </td>
          <td></td>
          <td>data to render in timeline. Should be a list of data objects</td>
          <td>
          <pre>
[
      {
        from: "Oct 2010",
        to: "Oct 2011",
        title: "Company A",
        description: "Worked as a X in Company A............"
      },
      {
        from: "Nov 2011",
        to: "Nov 2012",
        title: "Company B",
        description: "Worked as a Y in Company B............."
      }
    ]
</pre>
          </td>
        </tr>
    </tbody>
</table>

## License

MIT © [amiranga](https://github.com/amiranga)
