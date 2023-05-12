const Book = require("../model/Book");


const getAllBooks = async(req,res,next)=>{
    // get all books 
     
    let books;
    try{
      books = await Book.find();
    }
    catch(err){
       console.log(err);
    }
  
    if(!books)
    {
      return res.status(404).json({message:"no books found" });
    }
    return res.status(200).json({books})
  
  };

  const addBook = async(req,res,next)=>{
    // get all books 
    const {name,author,description,price,available,image}=req.body;
    let book;
    try{
      book = new Book({
          name,
          author,
          description,
          price,
          available,
          image,
      });
      await book.save();
    }
    catch(err){
       console.log(err);
    }
  
    if(!book)
    {
      return res.status(500).json({message:"unable to Add" });
    }
    return res.status(201).json({book})
  
  };

  const getBook = async(req,res,next)=>{
    // get all books 
    const id= req.params.id;
    let book;
    try{
      book = await Book.findById(id);
    }
    catch(err){
       console.log(err);
    }
  
    if(!book)
    {
      return res.status(404).json({message:"no book found by this id" });
    }
    return res.status(200).json({book})
  
  };

  const updateBook = async(req,res,next)=>{
    // get all books
    const id=req.params.id; 
    const {name,author,description,price,available,image}=req.body;
    let book;
    try{
      book = await Book.findByIdAndUpdate(id,{
          name,
          author,
          description,
          price,
          available,
          image,
      });
      book = await book.save();
    }
    catch(err){
       console.log(err);
    }
  
    if(!book)
    {
      return res.status(404).json({message:"unable to update with this id" });
    }
    return res.status(200).json({message:"successfully updated"})
  
  };

  const deleteBook = async(req,res,next)=>{
    // get all books 
    const id= req.params.id;
    let book;
    try{
      book = await Book.findByIdAndRemove(id);
    }
    catch(err){
       console.log(err);
    }
  
    if(!book)
    {
      return res.status(404).json({message:"unable to delete by this id" });
    }
    return res.status(200).json({message:"successfully deleted"})
  
  };

  exports.getAllBooks=getAllBooks;
  exports.addBook=addBook;
  exports.getBook=getBook;
  exports.updateBook=updateBook;
  exports.deleteBook=deleteBook;