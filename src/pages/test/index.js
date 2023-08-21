import { useRouter } from "next/router"

const Test = ()=>{
    const router = useRouter()

  const goToTest = () =>{
router.push(`/test/${Math.round(Math.random()*100)}`)
  }
  return <div><h1>test</h1>   <div onClick={goToTest}>

          go to test
        </div></div>  
}


export default Test