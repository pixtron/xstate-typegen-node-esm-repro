import { createMachine } from "xstate";

createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnQGIAxAeWoG0AGAXUVAAcB7WXAF1w-ysQAD0QBGAEwBWElIA0IAJ6IAHGNkBfLQvwcIcIWix5CRIZ258BQ0QgC0ANgXL7D7SCM4CxMua69+QSQRRAAWCWdxBhkGAGYATgYHaXdPEx8AIz9LQJtEWIZQ2VjJeSVVdSkEpJStDSA */
  tsTypes: {} as import("./main.typegen").Typegen0,
  schema: {
    context: {} as { value: string },
    events: {} as { type: 'FOO'; value: string } | { type: 'BAR' }
  },
  initial: 'a',
  context: {
    value: '',
  },
  states: {
    a: {
      on: {
        FOO: {
          actions: 'consoleLogValue',
          target: 'b'
        }
      }
    },
    b: {
      entry: 'consoleLogValueAgain'
    }
  }
}, {
  actions: {
    consoleLogValue: (_, event) => {
      console.log(event.value);
    },
    consoleLogValueAgain: (_, event) => {
      console.log('again', event.value);
    }
  },
});
