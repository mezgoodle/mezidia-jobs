# Mezidia jobs

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


[![Language](https://img.shields.io/badge/language-javascript-brightgreen?style=flat-square)](https://developer.mozilla.org/uk/docs/Web/JavaScript)

Hello everyone! This is the site, that shows available jobs in **Mezidia** organization.

## Table of contents

- [Motivation](#motivation)
- [Build status](#build-status)
- [Badges](#badges)
- [Screenshots](#screenshots)
- [Tech/framework used](#techframework-used)
- [Features](#features)
- [Code Example](#code-example)
- [Installation](#installation)
- [Fast usage](#fast-usage)
- [Contribute](#contribute)
- [Credits](#credits)
- [License](#license)

## Motivation

Once I saw a [lesson](https://www.youtube.com/watch?v=fxY1q4SCB64) on _YouTube_ on React-Hooks. I wanted to repeat this project while developing [API](https://github.com/mezidia/flask-jobs).

## Build status

Here you can see build status of [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)/[continuous deployment](https://en.wikipedia.org/wiki/Continuous_deployment):

![Lint Code Base](https://github.com/mezidia/mezidia-jobs/workflows/Lint%20Code%20Base/badge.svg)
![Build and Deploy](https://github.com/mezidia/mezidia-jobs/workflows/Build%20and%20Deploy/badge.svg)

## Badges

[![Theme](https://img.shields.io/badge/Theme-REST_API-brightgreen?style=flat-square)](https://uk.wikipedia.org/wiki/REST)
[![Platform](https://img.shields.io/badge/Platform-NodeJS-brightgreen?style=flat-square)](https://nodejs.org/uk/)

## Screenshots

- Loading screen

![Screenshot 1](https://raw.githubusercontent.com/mezgoodle/images/master/mezidia-jobs1.png)

- Main page

![Screenshot 2](https://raw.githubusercontent.com/mezgoodle/images/master/mezidia-jobs.png)

## Tech/framework used

**Built with**

- [Node.js](https://nodejs.org/uk/)
- [React](https://uk.reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

## Features

On the website you can **see** all available jobs, **filter** only _full-time jobe_, **search** vacancies.

## Code Example

- Fetch jobs

```js
import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://flask-jobs.herokuapp.com/job'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.jobs, jobs: [] }
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage }
    default:
      return state
  }
}

export default function useFetchJobs (params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
      params: { markdown: true, page: page, ...params }
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
    })

    const cancelToken2 = axios.CancelToken.source()
    axios.get(BASE_URL, {
      cancelToken: cancelToken2.token,
      params: { markdown: true, page: page + 1, ...params }
    }).then(res => {
      dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } })
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
    })

    return () => {
      cancelToken1.cancel()
      cancelToken2.cancel()
    }
  }, [params, page])

  return state
}
```

- Main file

```js
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import useFetchJobs from './useFetchJobs'
import Job from './components/Job'
import JobsPagination from './components/JobsPagination'
import SearchForm from './components/SearchForm'
import NavbarComponent from './components/Navbar'
import FooterComponent from './components/Footer'

const App = () => {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  const handleParamChange = (e) => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <div>
      <NavbarComponent />
      <Container className='my-4'>
        <h1 className='mb-4'>Mezidia Jobs</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try refreshing.</h1>}
        {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        <FooterComponent />
      </Container>
    </div>
  )
}

export default App
```

## Installation

1. Clone this repository by the command in terminal or by [GitHub CLI](https://cli.github.com/):

```bash
# git
git clone https://github.com/mezidia/mezidia-jobs.git
# GitHub CLI
gh repo clone mezidia/mezidia-jobs
```

2. Install packages by [npm](https://www.npmjs.com/):

```bash
npm install
```

## Fast usage

Just type in a terminal:

```bash
npm start
```

and open `http://localhost:3000/` in browser

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Also look at the [CONTRIBUTING.md](https://github.com/mezidia/mezidia-jobs/blob/master/CONTRIBUTING.md).

## Credits

Links to article and videos which inspired me to build this project:

- [Deploy React project to github-pages by CI](https://github.com/marketplace/actions/deploy-to-github-pages)
- [Lesson on YouTube about this project](https://www.youtube.com/watch?v=fxY1q4SCB64)

## License

MIT © [mezgoodle](https://github.com/mezgoodle)
