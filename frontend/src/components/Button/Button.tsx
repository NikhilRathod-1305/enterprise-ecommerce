/**
 * 🎓 LESSON 1: Your First React Component
 * 
 * 📖 What is a Component?
 * A component is a reusable piece of UI. Think of it like a LEGO block.
 * You can use the same button in 100 different places!
 * 
 * 📖 Function Components (Modern Way):
 * - A component is just a JavaScript function
 * - It returns JSX (looks like HTML)
 * - Function name MUST start with capital letter
 */

// This is a TypeScript interface - it defines the "shape" of data
interface ButtonProps {
  children: string;        // Text inside button
  onClick?: () => void;    // Optional click handler (? = optional)
  variant?: 'primary' | 'secondary';  // Button style
}

/**
 * 🔍 SIMPLE EXAMPLE:
 * This is a Button component. It's a function that returns JSX.
 */
function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  // 📖 JSX Rules:
  // 1. Must return ONE parent element
  // 2. Use className (not class) for CSS
  // 3. Use {} to embed JavaScript expressions
  
  const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <button 
      className={`btn ${buttonClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

/**
 * 💡 KEY CONCEPTS YOU JUST LEARNED:
 * 
 * 1. ✅ Component = Function that returns JSX
 * 2. ✅ Props = Data passed to component (like function parameters)
 * 3. ✅ JSX = HTML-like syntax in JavaScript
 * 4. ✅ TypeScript Interface = Defines what props component accepts
 * 5. ✅ Export = Makes component available to other files
 * 
 * 🏢 Why Companies Love This:
 * - Build Button once, use 1000 times
 * - Change button style? Edit one file, updates everywhere!
 * - TypeScript prevents bugs (catches errors before running)
 */
