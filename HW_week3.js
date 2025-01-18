const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
const purchaseRecord = [];

function course(num){
    if (num <= 0 ){
        console.log("請輸入大於0的數字");
        return;
    } 

    let unitPrice; 
    if (num <= 10){ //購買數量 / 單價 (每堂課) 1-10 堂 / 1500 元
        unitPrice = 1500; 
    }else if(num <= 20){ //購買數量 / 單價 (每堂課) 11-20 堂 / 1300 元
        unitPrice = 1300;
    }else{ //購買數量 / 單價 (每堂課) 21 堂以上 / 1100 元
        unitPrice = 1100;
    }
    return {unitPrice: unitPrice, total: num * unitPrice} //回傳 {課程單價, 總金額}
}

function addPurchaseRecord(name, session){

    if (name == undefined || name=="" || typeof session !== "number" || session == 0){
        console.log("輸入錯誤，請輸入有效的會員名稱和課程數量");
        return
    }

    const courseRecord = course(session)
    purchaseRecord.push({
        name: name, 
        sessions: session,
        unitPrice: courseRecord.unitPrice,
        totalPrice: courseRecord.total
    })
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${session} 堂課，總金額為 ${courseRecord.total} 元`)
}

function calculateTotalPrice(purchaseRecord){
    let totalPrice=0;
    purchaseRecord.forEach(function(record){
        console.log(record.totalPrice);
        totalPrice += record.totalPrice;
    })
    console.log(`目前總營業額為 ${totalPrice} 元`)
}

function filterNoPurchaseMember(purchaseRecord){
    let purchasedMembers=[]
    purchaseRecord.forEach(function(record){
        purchasedMembers.push(record.name);
    })

    const noPurchaseMembers = members.filter(function(member){
        return purchasedMembers.includes(member) === false
    });
    console.log(`未購買課程的會員有：${noPurchaseMembers}`)
}



addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12); 
addPurchaseRecord("Charlie", 25); 
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");
calculateTotalPrice(purchaseRecord);
filterNoPurchaseMember(purchaseRecord);