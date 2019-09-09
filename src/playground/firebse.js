
//   db.ref('location').on('value', (snapshot)=>{
//     console.log(snapshot.val());
//   });

//   setTimeout(()=>{
//     db.ref('age').set(30);
//   },6000);

//   db.ref().once('value')
//     .then((snapshot)=>{
//         console.log(snapshot.val());
//     })
//     .catch((e)=>{
//         console.log('some error', e);
//     });

//   db.ref().set({
//       name:'jitendra',
//       age:45,
//       isSingle:true,
//       location: {
//           city: 'city',
//           state:'state',
//           country: 'country'
//       }
//   })
//   .then((data)=>{
//     console.log('data is saved.',data)
//   })
//   .catch((error)=>{
//     console.error('something went wrong!! ',error)
//   });

    // db.ref().remove()
    //   .then((data)=>{
    //     console.log('data is removed.',data)
    //   })
    //   .catch((error)=>{
    //     console.error('something went wrong!! ',error)
    //   });

    // db.ref().update({
    //     isSingle:null,
    //     stressLevel: 9,
    //     'job/company': 'XYZ Ltd.',
    //     'location/city': 'London',
    //     })
    //   .then((data)=>{
    //     console.log('data is removed.',data)
    //   })
    //   .catch((error)=>{
    //     console.error('something went wrong!! ',error)
    //   });


//   db.ref('location/city').set('xyz');
//   db.ref('age').set(35);

//   db.ref('attributes').set({
//       height: 22,
//       weight: 33
//   });

  //--------------------------------------------------------------------------
//   const promise = new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         // resolve({
//         //     name:'jitendra',
//         //     age:45,
//         //     isSingle:true,
//         //     location: {
//         //         city: 'city',
//         //         state:'state',
//         //         country: 'country'
//         //     }
//         // });
//         reject("something went wrong!!");
//       }, 5000);
//   });

//   console.log('before');

// //   promise.then(
// //     (data)=>{
// //         console.log(data);
// //     },
// //    (error)=>{
// //     console.log(error);
// //    }
// //   );

//     promise
//         .then((data)=>{
//             console.log(data);
//         })
//         .catch((error)=>{
//             console.log(error);
//         });

//   console.log('after');