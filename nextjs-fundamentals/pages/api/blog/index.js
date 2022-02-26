

import { blogs } from '../../../data/blog';

const handler=(req,res)=> {
  if(req.method==="GET"){
    res.status(200).json(blogs);
  }
  else if(req.method==="POST"){
    const blog=req.body.blog;
    const newComment={
      id:Date.now(),
      title:blog,
      description:blog+' for description'
    }

    blogs.push(newComment);
    res.status(200).json(newComment);
  }
  else if (req.method==="DELETE"){
    console.log("Delete")
  }
  else{
    res.status(404);
    res.end();
  }
}

export default handler