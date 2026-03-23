export interface LotsPayment {
    bpar_i_person_id?: number | null,
    mp_i_owner_id?: number | null,
    mp_i_lot_id?: number | null,
    amt_amort?: string,
    amt_spotcash?: string,
    lot?: string,
    date_sched_payment?: string,
}
