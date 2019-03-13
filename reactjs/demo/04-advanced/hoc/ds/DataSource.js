

let comments = [
    {id:1,msg:'评论1'},
    {id:2,msg:'评论2'},
    {id:3,msg:'评论3'}
] 
let blogs = [
    {id:1,msg:'博客1'},
    {id:2,msg:'博客2'},
    {id:3,msg:'博客3'}
]
let index = 4;
let listeners = [];

const DataSource = {
    getComments(){
        return comments;
    },
    addComment(msg){
        comments.push({
            id: index++,
            msg
        })
        DataSource.doListeners();
    },
    getBlogPost(id){
        return blogs.find((item)=>item.id===id)
    },
    addChangeListener(listener){
        listeners.push(listener)
    },
    removeChangeListener(listener){
        listeners.forEach((item,index)=>{
            if(listener === item){
                listeners.splice(index,1)
            }
        })
    },
    doListeners(){
        listeners.forEach((item)=>{
            item();
        })
    }
}
export default DataSource;