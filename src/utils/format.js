export const formatPrice=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
export const truncate=(s,n=115)=>s?.length>n?s.slice(0,n).trim()+'…':s;
