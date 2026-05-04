/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Terminal } from './components/Terminal';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#00d4ff] text-black px-4 py-2 z-50">
        Skip to main content
      </a>
      <main id="main-content">
        <ErrorBoundary>
          <Terminal />
        </ErrorBoundary>
      </main>
    </div>
  );
}
