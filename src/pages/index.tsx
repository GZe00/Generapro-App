import * as React from "react"
import type { HeadFC } from "gatsby"
import { Button } from "antd"

const IndexPage = () => {
  return <div className="w-full h-screen bg-slate-600 text-white flex justify-center items-center">
    <p>Hola mundo</p>
    <Button type="primary">Presioname</Button>


  </div>

}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
