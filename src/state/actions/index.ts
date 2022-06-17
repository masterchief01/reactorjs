import { ActionType, CellType } from '../actionTypes';

interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: {
        id: string;
        direction: 'up' | 'down';
    };
}

interface DeleteCellAction {
    type: ActionType.DELETE_CELL;
    payload: string;
}

interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
    payload: {
        id: string;
        content: string;
    };
}

interface InsertCellBeforeAction {
    type: ActionType.INSERT_CELL_BEFORE;
    payload: {
        id: string;
        type: CellType;
    };
}

export type Action = MoveCellAction | DeleteCellAction | UpdateCellAction | InsertCellBeforeAction;