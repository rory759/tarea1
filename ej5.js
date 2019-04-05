function exerciseElaboration(p,n){
    var sum=p;
    n= n+1;
    while(n!=0){
      n= n-1;
      sum*=10;
    }
    sum+=p;
    sum=Math.pow(sum,2);
    p=0;
    while(sum>0){
      p+=sum%10;
      sum=parseInt(sum/=10);
    }
    return p;
}
console.log(exerciseElaboration(1,2));