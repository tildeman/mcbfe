function append(n){
    document.getElementById("result").innerHTML+=''+n;
}

function Delete(){
    document.getElementById("result").innerHTML='';
}

function nia(n){
    if (document.getElementById("result").innerHTML.length!=0) append(n);
}

function bang(){
    let so=[""];
    let sopholoat=[];
    let dau="";
    let ctso=0;
    let vb=document.getElementById("result").innerHTML;
    for (let i=0;i<vb.length;i++){
        if (vb[i]=="+"||vb[i]=="-"){
            so[++ctso]="";
            dau+=vb[i];
        }
        else so[ctso]+=vb[i];
    }
    for (i=0;i<so.length;i++){
        let so2=[""];
        let dau2="";
        let ctso2=0;
        let vb2=so[i];
        for (let j=0;j<vb2.length;j++){
            if (vb2[j]=="*"||vb2[j]=="/"){
                so2[++ctso2]="";
                dau2+=vb2[j];
            }
            else so2[ctso2]+=vb2[j];
        }
        // pạc
        dau2="*"+dau2;
        sopholoat[i]=1.0;
        for (let j=0;j<so2.length;j++){
            if (dau2[j]=="*") sopholoat[i]*=parseFloat(so2[j]);
            else sopholoat[i]/=parseFloat(so2[j]);
        }
    }
    //pạc
    console.log(sopholoat);
    let r=0;
    dau="+"+dau;
    console.log(dau);
    for (let i=0;i<sopholoat.length;i++){
        if (dau[i]=='+') r+=sopholoat[i];
        else r-=sopholoat[i];
    }
    document.getElementById("result").innerHTML=r;
}