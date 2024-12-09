import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null); // Track the currently open category

  useEffect(() => {
    // Parse the CSV file
    Papa.parse('/menu.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        // Transform CSV data into categories
        const categories = result.data.reduce((acc, item) => {
          const { category, name, price, description, allergens } = item;
          if (!acc[category]) {
            acc[category] = { category, items: [] };
          }
          acc[category].items.push({ name, price, description, allergens });
          return acc;
        }, {});
        
        setMenu(Object.values(categories)); // Convert to an array of categories
      },
    });
  }, []);

  const toggleCategory = (index) => {
    if (openCategoryIndex === index) {
      // If the same category is clicked, close it
      setOpenCategoryIndex(null);
    } else {
      // Open the clicked category and close the previous one
      setOpenCategoryIndex(index);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl h-[80vh] overflow-y-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Menu</h1>
        <div className="space-y-6">
          {menu.map((category, index) => (
            <div key={index} className="pb-4">
              <div>
                {/* Category title with line under it */}
                <div
                  className="flex items-center justify-between cursor-pointer text-2xl font-semibold text-gray-900"
                  onClick={() => toggleCategory(index)}
                >
                  <span>{category.category}</span>
                  <span
                    className={`transform ${openCategoryIndex === index ? 'rotate-180' : ''} transition-transform`}
                  >
                    &#9660; {/* Triangle icon */}
                  </span>
                </div>
                <div className="border-b-2 border-gray-300 my-2" /> {/* Line under category name */}
              </div>

              {/* Add transition effects for category content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  maxHeight: openCategoryIndex === index ? '1000px' : '0px', // Smoothly open/close category
                }}
              >
                {openCategoryIndex === index && (
                  <ul className="space-y-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Cena: {item.price}</div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-sm text-gray-500">{item.description}</div>
                          <div className="text-xs text-gray-400">Alergeny: {item.allergens}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
