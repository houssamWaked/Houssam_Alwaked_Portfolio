import './styles/NavigationCard.css';
import { navItems } from '../../data/navigation';

function NavigationCard({ items = navItems, activeSection, onNavigate = () => {} }) {
  return (
    <nav className="nav-card" aria-label="Primary">
      {items.map((item) => (
        <button
          className={`nav-item${activeSection === item.id ? ' is-active' : ''}`}
          data-label={item.label}
          type="button"
          key={item.id}
          aria-label={item.label}
          aria-current={activeSection === item.id ? 'page' : undefined}
          onClick={() => onNavigate(item.id)}
        >
          <img className="nav-icon" src={item.icon} alt="" />
        </button>
      ))}
    </nav>
  );
}

export default NavigationCard;
