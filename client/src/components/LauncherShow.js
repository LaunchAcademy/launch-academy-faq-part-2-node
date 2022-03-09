import React, { useEffect, useState } from "react"

const LauncherShow = (props) => {
  // Store the launcher data
  const [launcher, setLauncher] = useState({})

  useEffect(() => {
    // run the fetch function once on the initial loading of the page
    getLauncher()
  }, [])

  const getLauncher = async () => {
    // access the /:id wildcard and use it for the fetch request
    let id = props.match.params.id

    try {
      const response = await fetch(`/api/v1/launchers/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const launcherData = await response.json()
      // set the launcher object in state to trigger a rerendering of the component
      setLauncher(launcherData.launcher)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  return (
    <div>
      <h1>{launcher.name}</h1>
      <p>{launcher.bio}</p>
    </div>
  )
}

export default LauncherShow
