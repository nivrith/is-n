/*!
 * is-n <https://github.com/nivrith/is-n>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */

import {
  nIsFinite
} from 'n-is-finite';


export function isN( n: number ): boolean;
export function isN( n: string ): boolean;
export function isN( n: any ) {
  const type = typeof n;
  if ( type === 'number' ) return n - n === 0
  if ( type === 'string' && n.trim() !== '' ) return Number.isFinite ? Number.isFinite( +n ) : isFinite( +n )
  return false;
};