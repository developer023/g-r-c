import todoReducer, { todoActionTypes } from './slice';

describe('todo reducer', () => {
  it('should handle addItem', () => {
    expect(
      todoReducer(
        {
          data: [],
          filter: 'all',
          filteredData: [],
        },
        {
          type: todoActionTypes.addItem,
          payload: 'test',
        }
      )
    ).toEqual({
      data: [
        {
          id: expect.any(Number),
          description: 'test',
          isCompleted: false,
        },
      ],
      filter: 'all',
      filteredData: [],
    });
  });

  it('should handle deleteItem', () => {
    expect(
      todoReducer(
        {
          data: [
            {
              id: 1,
              description: 'test',
              isCompleted: false,
            },
          ],
          filter: 'all',
          filteredData: [],
        },
        {
          type: todoActionTypes.deleteItem,
          payload: 1,
        }
      )
    ).toEqual({
      data: [],
      filter: 'all',
      filteredData: [],
    });
  });

  it('should handle setCompleteState', () => {
    expect(
      todoReducer(
        {
          data: [
            {
              id: 1,
              description: 'test',
              isCompleted: false,
            },
          ],
          filter: 'all',
          filteredData: [],
        },
        {
          type: todoActionTypes.setCompleteState,
          payload: 1,
        }
      )
    ).toEqual({
      data: [
        {
          id: 1,
          description: 'test',
          isCompleted: true,
        },
      ],
      filter: 'all',
      filteredData: [],
    });
  });

  it('should handle setCompleteState with payload not in data', () => {
    expect(
      todoReducer(
        {
          data: [
            {
              id: 1,
              description: 'test',
              isCompleted: false,
            },
          ],
          filter: 'all',
          filteredData: [],
        },
        {
          type: todoActionTypes.setCompleteState,
          payload: 2,
        }
      )
    ).toEqual({
      data: [
        {
          id: 1,
          description: 'test',
          isCompleted: false,
        },
      ],
      filter: 'all',
      filteredData: [],
    });
  });

  it('should handle setFilter', () => {
    expect(
      todoReducer(
        {
          data: [],
          filter: 'all',
          filteredData: [],
        },
        {
          type: todoActionTypes.setFilter,
          payload: 'completed',
        }
      )
    ).toEqual({
      data: [],
      filter: 'completed',
      filteredData: [],
    });
  });

  it('should handle getFilteredData', () => {
    expect(
      todoReducer(
        {
          data: [],
          filter: 'completed',
          filteredData: [],
        },
        {
          type: todoActionTypes.getFilteredData,
          payload: [
            {
              id: 1,
              description: 'test',
              isCompleted: true,
            },
          ],
        }
      )
    ).toEqual({
      data: [],
      filter: 'completed',
      filteredData: [],
    });
  });

  it('should handle getFilteredData with payload not in data', () => {
    expect(
      todoReducer(
        {
          data: [],
          filter: 'completed',
          filteredData: [],
        },
        {
          type: todoActionTypes.getFilteredData,
          payload: null,
        }
      )
    ).toEqual({
      data: [],
      filter: 'completed',
      filteredData: [],
    });
  });
});
