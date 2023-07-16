import React, { useEffect } from 'react';
import pyodide from 'pyodide';

function MyComponent() {
  useEffect(() => {
    async function main() {
      await pyodide.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/dev/full/' });
      await pyodide.runPythonAsync('print(1 + 2)');
    }
    main();
  }, []);

}

export default MyComponent;