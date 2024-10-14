function defineDatatypes<T,U>(a:T,b:U):void{
    console.log("Data Type : ",typeof(a));
    console.log("Data Type : ",typeof(b));
}
defineDatatypes<string,number>("Ram",45)

