import { CardLayout } from "./cardLayouts";

function Card({ variant, data, ...actions }) {
  const layout = CardLayout[variant];

  if (!layout) {
    console.warn(`Card: variant "${variant}"`);
    return null;
  }

  return <>{layout(data, actions)}</>;
}

export default Card;
