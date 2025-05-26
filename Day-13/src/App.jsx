// // 
//////////////////////////////////////Using Map and showing all data (Get-To fetch data) ///////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // post , get , put

  console.log("Data is: ", data);

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((value) => {
        // console.log("value is: ", value);
        return value.json();
      })
      .then((data) => {
        // console.log("response json data is: ", data[0]);
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
        console.log("Error is  ", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="h-screen w-full bg-slate-200">
      {data &&
        data.map((value,index) => {
          return (
            <div key={index}  className="h-fit w-fit bg-orange-100 my-2">
              <h1>{value?.id}</h1>
              <h1>{value?.title}</h1>
              <h1>{value?.body}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default App;



////////////////////////////////////////Not Using Map and Showing a single data (Get-To fetch data)//////////////////////////////////////////


// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   //post, get and push method

//   console.log("Data is:", data);

//   const fetchData = () => {
//     setIsLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((value) => {
//         return value.json();
//       })
//       .then((data) => {
//         setIsLoading(false);
//         setData(data);
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         setError(error);
//         console.log("Error is", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div> Loading.......</div>;
//   }

  
//   return (
//     <div className="h-screen w-full bg-slate-600">
//       {data && (
//         <div className="h-fit w-fit bg-orange-500 my-2 p-4 rounded text-white">
//           <h1>ID: {data?.id}</h1>
//           <h1>Title: {data?.title}</h1>
//           <h1>Body: {data?.body}</h1>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





// // ///////// ///// / / ////// / // / /   This is Post Method  /// / / / // ///////////////////////////////////////////////////////////
// import React, { useState } from "react";

// function App() {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reload

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: title,
//         body: body,
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Submitted:", data);
//         alert("Post submitted!");
//         setTitle("");
//         setBody("");
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
//         <h1 className="text-xl font-bold mb-4">Create a Post</h1>
//         <input
//           type="text"
//           placeholder="Title"
//           className="w-full p-2 border mb-3 rounded"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Body"
//           className="w-full p-2 border mb-3 rounded"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;
