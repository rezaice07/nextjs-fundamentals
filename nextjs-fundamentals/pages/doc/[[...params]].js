import React from 'react';
import { useRouter } from 'next/router';
const index = () => {

  const router = useRouter();
  const { params =[]} = router.query;
  console.log(params[0])

  if(params.length===1){
    return (
      <div>
        <h1>This is the doc with feature {params[0]}</h1>
      </div>
    )
  }

  if(params.length===2){
    return (
      <div>
        <h1>This is the doc with feature {params[0]} and concept {params[1]}</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>This is the doc</h1>
    </div>
  )
}

export default index