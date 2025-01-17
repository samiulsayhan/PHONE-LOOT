const menuBar = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Top Rated", href: "/toprated" },
  { id: 3, label: "Devices", href: "/devices" },
  { id: 4, label: "Electronics", href: "/electronics" },
  { id: 5, label: "Contact", href: "/contact" },
];

const ManuBar = () => {
  return (
    <div className="flex justify-center bg-white shadow-md">
      {/* from here manubar */}
      <div>
        <div className="w-[700px] py-2">
          <ul className="flex justify-between items-center font-semibold">
            {menuBar.map((i) => (
              <a key={i.id} href={i.href}>
                <li>{i.label}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManuBar;
