const Test = ({id})=>{

  return <div><h1>{id}</h1>  </div>  
}

export  const getServerSideProps=({params}) =>({props:{id:params.testId}})

export default Test