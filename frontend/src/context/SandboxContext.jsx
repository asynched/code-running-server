import React, { createContext, useMemo, useReducer } from 'react'

/**
 * @callback ContextReducerDispatchType
 *
 * @param {string} type
 * @param {any} payload
 */

/**
 * @typedef ContextReducerStateType
 *
 * @property {typeof sandboxInitialState} state
 * @property {ContextReducerDispatchType} dispatch
 */

/**
 * @type {React.Context<ContextReducerStateType>}
 */
export const SandboxContext = createContext(null)

const sandboxInitialState = {
  pageInfo: {
    containerID: null,
    info: {
      folderName: null,
      folderPath: null,
      files: [],
    },
  },
  activeFile: {
    fileName: null,
    content: null,
  },
  loaded: false,
  logs: [],
}

export const sandboxActions = {
  SET_PAGE_INFO: 1,
  SET_ACTIVE_FILE: 2,
  SET_DEFAULT_ACTIVE_FILE: 3,
  SET_LOADED: 4,
  SET_LOGS: 5,
}

const sandboxReducer = (state, action) => {
  switch (action.type) {
    case sandboxActions.SET_PAGE_INFO: {
      return { ...state, pageInfo: action.payload, loaded: true }
    }
    case sandboxActions.SET_ACTIVE_FILE: {
      return { ...state, activeFile: action.payload }
    }
    case sandboxActions.SET_DEFAULT_ACTIVE_FILE: {
      return { ...state, activeFile: state.pageInfo.info.files[0] }
    }
    case sandboxActions.SET_LOGS: {
      return { ...state, logs: [...state.logs, action.payload] }
    }
    default: {
      throw new Error(
        `Action of type "${action.type}" is not defined. Action: ${JSON.stringify(action)}`
      )
    }
  }
}

export default function SandboxContextProvider({ children }) {
  const [state, dispatch] = useReducer(sandboxReducer, sandboxInitialState)
  const [memoizedState, memoizedDispatch] = useMemo(() => [state, dispatch], [state, dispatch])

  return (
    <SandboxContext.Provider
      value={{
        state: memoizedState,
        dispatch: memoizedDispatch,
      }}
    >
      {children}
    </SandboxContext.Provider>
  )
}
