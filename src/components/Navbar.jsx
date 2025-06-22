import '../style.css';

export default function Navbar({data, setDisplayedPins, displayedPins}) {

  //function filtering displayed data based on search query
  const handleSearch = (e) => {
    const query = e.target.value;

    if (!query || query.trim() === "") {
      setDisplayedPins(data);
      return;
    }
    const filteredData = data.filter(pin =>
      pin.title.toLowerCase().includes(query.toLowerCase()) ||
      pin.url.includes(query.toLowerCase())
    );
    setDisplayedPins(filteredData);
  }

  //function sorting displayed data
  const handleSort = (e) => {
    const option = e.target.value;
    let sorted = [...displayedPins];

    switch (option) {
      case 'date-up':
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'date-down':
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'name-up':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;  
      case 'name-down':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    setDisplayedPins(sorted);
  }

  return (
    <div className='
      min-h-20 w-full md:w-96/100 md:max-w-[1800px] 
      mx-auto md:mt-4
      flex items-center justify-between px-2 sm:px-4 md:px-10
      bg-slate-950 md:rounded-xl'
    >
      <div className='flex flex-row items-center md:gap-8 w-full h-full'>
        <h1 className='text-2xl text-neutral-300 font-semibold'>PnLk</h1>
        <input type='text' 
          onChange={handleSearch}
          placeholder='Search your link here' 
          className='
          h-1/2 w-2/3 lg:w-1/4 focus:w-full lg:focus:w-1/3
          mx-2

          bg-slate-900 rounded-md px-2
          text-neutral-300 text-sm md:text-lg font-medium
          focus:outline-2 outline-slate-600
          transition-[width] duration-400 ease-in-out'
        />
      </div>
      <select onChange={handleSort}
      className='h-1/2 min-w-1/5 md:w-1/12 md:min-w-32
        outline-none px-1 text-sm md:text-lg font-semibold
        text-neutral-300 bg-slate-800 rounded-md'
      >
        <option value="date-up">Date ↑</option>
        <option value="date-down">Date ↓</option>
        <option value="name-up">Name ↑</option>
        <option value="name-down">Name ↓</option>
      </select>
    </div>
  )
}