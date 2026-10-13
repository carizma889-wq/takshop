import { Link } from "react-router-dom";
import { megaMenu } from "../../assets/assets";

function MegaMenu({ onNavigate }) {
  const groups = megaMenu.groups.filter((group) => group.items.length > 0);

  return (
    <div className="mega_menu">
      <Link to={megaMenu.viewAll.path} className="mega_view_all" onClick={onNavigate}>
        {megaMenu.viewAll.label}
      </Link>
      <div className="mega_columns">
        {groups.map((group) => (
          <div key={group.id} className="mega_column">
            <h3 className="mega_title">{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.value}>
                  <Link
                    to={`/store?${group.param}=${item.value}`}
                    onClick={onNavigate}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;