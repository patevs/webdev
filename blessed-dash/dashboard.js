/**
 *	* Blessed dashboard example
 */

function loadDashboard() {
  // ..
  // Dashboard screen
  let screen = blessed.screen();
  // Set screen title
  screen.title = "SUPOMATION DASHBOARD";
  // Use grid layout
  let grid = new contrib.Grid({ rows: 12, cols: 12, screen: screen });

  // Grid.set(row, col, rowSpan, colSpan, obj, opts)

  // Dashboard title
  grid.set(0, 4, 1, 4, blessed.box, {
    content: "SUPOMATION DASHBOARD",
    align: "center",
    border: {
      type: "line"
    },
    style: {
      border: {
        fg: "green"
      }
    }
  });
  // Dashboard content
  grid.set(1, 0, 4, 4, blessed.box, {
    label: "Content Top Left",
    content: "CONTENT TOP LEFT",
    align: "center",
    valign: "middle",
    style: {
      border: {
        fg: "cyan"
      }
    }
  });
  grid.set(1, 4, 4, 4, blessed.box, {
    content: "CONTENT TOP CENTER",
    align: "center",
    valign: "middle",
    style: {
      border: {
        fg: "red"
      }
    }
  });
  grid.set(1, 8, 11, 4, blessed.box, {
    label: "Content Right",
    content: "CONTENT RIGHT",
    align: "center",
    valign: "middle",
    style: {
      border: {
        fg: "yellow"
      }
    }
  });
  grid.set(5, 0, 7, 8, blessed.box, {
    label: "Content Bottom",
    content: "CONTENT BOTTOM",
    align: "center",
    valign: "middle",
    style: {
      border: {
        fg: "magenta"
      }
    }
  });
  // Let map =
  // grid.set(0, 0, 4, 4, contrib.map, { label: "World Map" });

  // Key event handling
  // eslint-disable-next-line no-unused-vars
  screen.key(["escape", "q", "C-c"], function (ch, key) {
    // TODO: Exit to main menu
    return process.exit(0);
  });

  // Render the screen
  screen.render();
  // ..
}

// EOF //
