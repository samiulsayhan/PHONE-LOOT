const menuBar = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Top Rated", href: "#toprated" },
  { id: 3, label: "Devices", href: "#devices" },
  { id: 4, label: "Catagory", href: "#catagory" },
  { id: 5, label: "Contact", href: "#contact" },
];

const ManuBar = () => {
  return (
    <div className="flex justify-center  ">
      {/* from here manubar */}
      <div>
        <div className="w-[600px] py-2">
          <ul className="flex justify-between items-center font-semibold">
            {menuBar.map((i) => (
              <a key={i.id} href={i.href}>
                <li className="text-gray-700 hover:text-black">{i.label}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManuBar;
