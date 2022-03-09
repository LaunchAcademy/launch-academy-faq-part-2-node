import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const LauncherList = (props) => {
  // Use an empty array for the initial state, because we are planning to store an array of launchers later on.
  const [launchers, setLaunchers] = useState([])

  useEffect(() => {
    getLaunchers()
  }, [])

  const getLaunchers = async () => {
    try {
      const response = await fetch("/api/v1/launchers")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const launchersData = await response.json()
      setLaunchers(launchersData.launchers)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  // If we used null as the initial state on line 6, this would error out
  const launcherList = launchers.map((launcher) => {
    return (
      <li key={launcher.id}>
        <Link to={`/launchers/${launcher.id}`}>{launcher.name}</Link>{" "}
      </li>
    )
  })

  return (
    <div>
      <ul>{launcherList}</ul>
    </div>
  )
}

export default LauncherList
