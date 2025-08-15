export function SkipLinks() {
  const skipToContent = () => {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  };

  const skipToNavigation = () => {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.focus();
      nav.scrollIntoView();
    }
  };

  return (
    <div className="sr-only focus-within:not-sr-only">
      <div className="fixed top-4 left-4 z-[100] flex gap-2">
        <button
          onClick={skipToContent}
          className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Skip to main content
        </button>
        <button
          onClick={skipToNavigation}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to navigation
        </button>
      </div>
    </div>
  );
}