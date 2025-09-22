// class createEnum{
//     constructor(arr) {
//         this.arr = arr;
//         this.allEnum = Object.keys(array);
//     }
//     getLable = (value)=>{
//         const enumValue = this.allEnum?.find((i)=>array[i][0] === value);
//         return array[enumValue][1];
//     };
//     getOptions = (boolean = false)=>{
//         const all = {value: '', label: '全部'};
//         const options =  this.allEnum?.map((i)=> {
//             const [v, l] = array[i];
//             return {
//                 value: v,
//                 label: l
//             }
//         });
//         if(boolean){
//             options.unshift(all)
//         }
//         return options;
//     };
//     addEnum = (options = [])=>{
//         const newOptions = getOptions(true);
//         newOptions.push(...options);
//         return newOptions;
//     }
//     subEnum = (options = [])=>{
//         const newOptions = getOptions(true).filter((v)=> !options.includes(v?.value));
//         return newOptions;
//     }
//     pickAll = ()=>{
//         const pickAll = {};
//         this.allEnum?.forEach((v)=>{
//             pickAll[v] = array[v][0];
//         });
//         return pickAll;
//     }
//
// }
//
// export default (array)=>{
//     const enumArray = new createEnum(array);
//     return enumArray;
// };
//
