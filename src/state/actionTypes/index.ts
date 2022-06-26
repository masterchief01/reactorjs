export enum ActionType {
    MOVE_CELL = 'move_cell',
    DELETE_CELL = 'delete_cell',
    UPDATE_CELL = 'update_cell',
    INSERT_CELL_AFTER = 'insert_cell_after'
}

export type CellType = 'text' | 'code';
export type CellMovementDirection = 'up' | 'down';
