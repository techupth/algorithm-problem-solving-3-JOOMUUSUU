function sortCustomerName(customers) {
  let temp;
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length; i++) {
    for (let x = 0; x < customers.length - 1; x++) {
      if (customers[x] > customers[x + 1]) {
        const temp = customers[x];
        customers[x] = customers[x + 1];
        customers[x + 1] = temp;
      }
    }
  }
  return customers;
}

console.log(
  sortCustomerName([
    "Somchai",
    "Arthit",
    "Suchada",
    "Napasorn",
    "Pimchanok",
    "Joom",
  ])
);

// ตอบคำถามตรงนี้จ้า
//Quadratic (O^2) เนื่องจากมี ซ้อน loop 2 loop เเละเป็นทำงาน เป็น 2เท่า
