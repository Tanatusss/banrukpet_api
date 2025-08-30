
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingService
 * 
 */
export type BookingService = $Result.DefaultSelection<Prisma.$BookingServicePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model AppointmentCheck
 * 
 */
export type AppointmentCheck = $Result.DefaultSelection<Prisma.$AppointmentCheckPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDING: 'PENDING',
  APPROVE: 'APPROVE',
  CANCELED: 'CANCELED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingService`: Exposes CRUD operations for the **BookingService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingServices
    * const bookingServices = await prisma.bookingService.findMany()
    * ```
    */
  get bookingService(): Prisma.BookingServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentCheck`: Exposes CRUD operations for the **AppointmentCheck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentChecks
    * const appointmentChecks = await prisma.appointmentCheck.findMany()
    * ```
    */
  get appointmentCheck(): Prisma.AppointmentCheckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pet: 'Pet',
    Booking: 'Booking',
    BookingService: 'BookingService',
    Service: 'Service',
    AppointmentCheck: 'AppointmentCheck',
    Contact: 'Contact'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pet" | "booking" | "bookingService" | "service" | "appointmentCheck" | "contact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingService: {
        payload: Prisma.$BookingServicePayload<ExtArgs>
        fields: Prisma.BookingServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload>
          }
          findFirst: {
            args: Prisma.BookingServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload>
          }
          findMany: {
            args: Prisma.BookingServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload>[]
          }
          create: {
            args: Prisma.BookingServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload>
          }
          createMany: {
            args: Prisma.BookingServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload>
          }
          update: {
            args: Prisma.BookingServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload>
          }
          deleteMany: {
            args: Prisma.BookingServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingServicePayload>
          }
          aggregate: {
            args: Prisma.BookingServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingService>
          }
          groupBy: {
            args: Prisma.BookingServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingServiceCountArgs<ExtArgs>
            result: $Utils.Optional<BookingServiceCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      AppointmentCheck: {
        payload: Prisma.$AppointmentCheckPayload<ExtArgs>
        fields: Prisma.AppointmentCheckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentCheckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentCheckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload>
          }
          findFirst: {
            args: Prisma.AppointmentCheckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentCheckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload>
          }
          findMany: {
            args: Prisma.AppointmentCheckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload>[]
          }
          create: {
            args: Prisma.AppointmentCheckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload>
          }
          createMany: {
            args: Prisma.AppointmentCheckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentCheckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload>
          }
          update: {
            args: Prisma.AppointmentCheckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentCheckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentCheckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentCheckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentCheckPayload>
          }
          aggregate: {
            args: Prisma.AppointmentCheckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentCheck>
          }
          groupBy: {
            args: Prisma.AppointmentCheckGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCheckGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCheckCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCheckCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pet?: PetOmit
    booking?: BookingOmit
    bookingService?: BookingServiceOmit
    service?: ServiceOmit
    appointmentCheck?: AppointmentCheckOmit
    contact?: ContactOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pet: number
    booking: number
    appointmentcheck: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | UserCountOutputTypeCountPetArgs
    booking?: boolean | UserCountOutputTypeCountBookingArgs
    appointmentcheck?: boolean | UserCountOutputTypeCountAppointmentcheckArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentcheckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentCheckWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    bookingservice: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingservice?: boolean | PetCountOutputTypeCountBookingserviceArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountBookingserviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingServiceWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    appointmentcheck: number
    bookingservice: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointmentcheck?: boolean | BookingCountOutputTypeCountAppointmentcheckArgs
    bookingservice?: boolean | BookingCountOutputTypeCountBookingserviceArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountAppointmentcheckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentCheckWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBookingserviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    bookingservice: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingservice?: boolean | ServiceCountOutputTypeCountBookingserviceArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingserviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingServiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    createdAt: Date | null
    updateAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    createdAt: Date | null
    updateAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    createdAt: number
    updateAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    createdAt?: true
    updateAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    createdAt?: true
    updateAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    createdAt?: true
    updateAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phone: string
    createdAt: Date
    updateAt: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    createdAt?: boolean
    updateAt?: boolean
    role?: boolean
    pet?: boolean | User$petArgs<ExtArgs>
    booking?: boolean | User$bookingArgs<ExtArgs>
    appointmentcheck?: boolean | User$appointmentcheckArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    createdAt?: boolean
    updateAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "createdAt" | "updateAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | User$petArgs<ExtArgs>
    booking?: boolean | User$bookingArgs<ExtArgs>
    appointmentcheck?: boolean | User$appointmentcheckArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>[]
      booking: Prisma.$BookingPayload<ExtArgs>[]
      appointmentcheck: Prisma.$AppointmentCheckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string
      createdAt: Date
      updateAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends User$petArgs<ExtArgs> = {}>(args?: Subset<T, User$petArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking<T extends User$bookingArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentcheck<T extends User$appointmentcheckArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentcheckArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pet
   */
  export type User$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * User.booking
   */
  export type User$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.appointmentcheck
   */
  export type User$appointmentcheckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    where?: AppointmentCheckWhereInput
    orderBy?: AppointmentCheckOrderByWithRelationInput | AppointmentCheckOrderByWithRelationInput[]
    cursor?: AppointmentCheckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentCheckScalarFieldEnum | AppointmentCheckScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    age: number | null
    userId: number | null
  }

  export type PetSumAggregateOutputType = {
    id: number | null
    age: number | null
    userId: number | null
  }

  export type PetMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    blood: string | null
    breed: string | null
    age: number | null
    gender: string | null
    userId: number | null
  }

  export type PetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    blood: string | null
    breed: string | null
    age: number | null
    gender: string | null
    userId: number | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    type: number
    blood: number
    breed: number
    age: number
    gender: number
    userId: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    age?: true
    userId?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    age?: true
    userId?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    blood?: true
    breed?: true
    age?: true
    gender?: true
    userId?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    blood?: true
    breed?: true
    age?: true
    gender?: true
    userId?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    blood?: true
    breed?: true
    age?: true
    gender?: true
    userId?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: number
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender: string | null
    userId: number | null
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    blood?: boolean
    breed?: boolean
    age?: boolean
    gender?: boolean
    userId?: boolean
    user?: boolean | Pet$userArgs<ExtArgs>
    bookingservice?: boolean | Pet$bookingserviceArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>



  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    blood?: boolean
    breed?: boolean
    age?: boolean
    gender?: boolean
    userId?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "blood" | "breed" | "age" | "gender" | "userId", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Pet$userArgs<ExtArgs>
    bookingservice?: boolean | Pet$bookingserviceArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      bookingservice: Prisma.$BookingServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      blood: string
      breed: string
      age: number
      gender: string | null
      userId: number | null
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Pet$userArgs<ExtArgs> = {}>(args?: Subset<T, Pet$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookingservice<T extends Pet$bookingserviceArgs<ExtArgs> = {}>(args?: Subset<T, Pet$bookingserviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'Int'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly type: FieldRef<"Pet", 'String'>
    readonly blood: FieldRef<"Pet", 'String'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly age: FieldRef<"Pet", 'Int'>
    readonly gender: FieldRef<"Pet", 'String'>
    readonly userId: FieldRef<"Pet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.user
   */
  export type Pet$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Pet.bookingservice
   */
  export type Pet$bookingserviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    where?: BookingServiceWhereInput
    orderBy?: BookingServiceOrderByWithRelationInput | BookingServiceOrderByWithRelationInput[]
    cursor?: BookingServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingServiceScalarFieldEnum | BookingServiceScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    datenow: Date | null
    date: string | null
    time: string | null
    status: $Enums.Status | null
    userId: number | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    datenow: Date | null
    date: string | null
    time: string | null
    status: $Enums.Status | null
    userId: number | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    datenow: number
    date: number
    time: number
    status: number
    userId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    datenow?: true
    date?: true
    time?: true
    status?: true
    userId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    datenow?: true
    date?: true
    time?: true
    status?: true
    userId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    datenow?: true
    date?: true
    time?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    datenow: Date
    date: string
    time: string
    status: $Enums.Status
    userId: number | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datenow?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    userId?: boolean
    User?: boolean | Booking$UserArgs<ExtArgs>
    appointmentcheck?: boolean | Booking$appointmentcheckArgs<ExtArgs>
    bookingservice?: boolean | Booking$bookingserviceArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    datenow?: boolean
    date?: boolean
    time?: boolean
    status?: boolean
    userId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datenow" | "date" | "time" | "status" | "userId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Booking$UserArgs<ExtArgs>
    appointmentcheck?: boolean | Booking$appointmentcheckArgs<ExtArgs>
    bookingservice?: boolean | Booking$bookingserviceArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      appointmentcheck: Prisma.$AppointmentCheckPayload<ExtArgs>[]
      bookingservice: Prisma.$BookingServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      datenow: Date
      date: string
      time: string
      status: $Enums.Status
      userId: number | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Booking$UserArgs<ExtArgs> = {}>(args?: Subset<T, Booking$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointmentcheck<T extends Booking$appointmentcheckArgs<ExtArgs> = {}>(args?: Subset<T, Booking$appointmentcheckArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingservice<T extends Booking$bookingserviceArgs<ExtArgs> = {}>(args?: Subset<T, Booking$bookingserviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly datenow: FieldRef<"Booking", 'DateTime'>
    readonly date: FieldRef<"Booking", 'String'>
    readonly time: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'Status'>
    readonly userId: FieldRef<"Booking", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.User
   */
  export type Booking$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Booking.appointmentcheck
   */
  export type Booking$appointmentcheckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    where?: AppointmentCheckWhereInput
    orderBy?: AppointmentCheckOrderByWithRelationInput | AppointmentCheckOrderByWithRelationInput[]
    cursor?: AppointmentCheckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentCheckScalarFieldEnum | AppointmentCheckScalarFieldEnum[]
  }

  /**
   * Booking.bookingservice
   */
  export type Booking$bookingserviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    where?: BookingServiceWhereInput
    orderBy?: BookingServiceOrderByWithRelationInput | BookingServiceOrderByWithRelationInput[]
    cursor?: BookingServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingServiceScalarFieldEnum | BookingServiceScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingService
   */

  export type AggregateBookingService = {
    _count: BookingServiceCountAggregateOutputType | null
    _avg: BookingServiceAvgAggregateOutputType | null
    _sum: BookingServiceSumAggregateOutputType | null
    _min: BookingServiceMinAggregateOutputType | null
    _max: BookingServiceMaxAggregateOutputType | null
  }

  export type BookingServiceAvgAggregateOutputType = {
    id: number | null
    petId: number | null
    bookingId: number | null
    serviceId: number | null
  }

  export type BookingServiceSumAggregateOutputType = {
    id: number | null
    petId: number | null
    bookingId: number | null
    serviceId: number | null
  }

  export type BookingServiceMinAggregateOutputType = {
    id: number | null
    petId: number | null
    bookingId: number | null
    serviceId: number | null
  }

  export type BookingServiceMaxAggregateOutputType = {
    id: number | null
    petId: number | null
    bookingId: number | null
    serviceId: number | null
  }

  export type BookingServiceCountAggregateOutputType = {
    id: number
    petId: number
    bookingId: number
    serviceId: number
    _all: number
  }


  export type BookingServiceAvgAggregateInputType = {
    id?: true
    petId?: true
    bookingId?: true
    serviceId?: true
  }

  export type BookingServiceSumAggregateInputType = {
    id?: true
    petId?: true
    bookingId?: true
    serviceId?: true
  }

  export type BookingServiceMinAggregateInputType = {
    id?: true
    petId?: true
    bookingId?: true
    serviceId?: true
  }

  export type BookingServiceMaxAggregateInputType = {
    id?: true
    petId?: true
    bookingId?: true
    serviceId?: true
  }

  export type BookingServiceCountAggregateInputType = {
    id?: true
    petId?: true
    bookingId?: true
    serviceId?: true
    _all?: true
  }

  export type BookingServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingService to aggregate.
     */
    where?: BookingServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingServices to fetch.
     */
    orderBy?: BookingServiceOrderByWithRelationInput | BookingServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingServices
    **/
    _count?: true | BookingServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingServiceMaxAggregateInputType
  }

  export type GetBookingServiceAggregateType<T extends BookingServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingService[P]>
      : GetScalarType<T[P], AggregateBookingService[P]>
  }




  export type BookingServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingServiceWhereInput
    orderBy?: BookingServiceOrderByWithAggregationInput | BookingServiceOrderByWithAggregationInput[]
    by: BookingServiceScalarFieldEnum[] | BookingServiceScalarFieldEnum
    having?: BookingServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingServiceCountAggregateInputType | true
    _avg?: BookingServiceAvgAggregateInputType
    _sum?: BookingServiceSumAggregateInputType
    _min?: BookingServiceMinAggregateInputType
    _max?: BookingServiceMaxAggregateInputType
  }

  export type BookingServiceGroupByOutputType = {
    id: number
    petId: number | null
    bookingId: number | null
    serviceId: number | null
    _count: BookingServiceCountAggregateOutputType | null
    _avg: BookingServiceAvgAggregateOutputType | null
    _sum: BookingServiceSumAggregateOutputType | null
    _min: BookingServiceMinAggregateOutputType | null
    _max: BookingServiceMaxAggregateOutputType | null
  }

  type GetBookingServiceGroupByPayload<T extends BookingServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingServiceGroupByOutputType[P]>
            : GetScalarType<T[P], BookingServiceGroupByOutputType[P]>
        }
      >
    >


  export type BookingServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petId?: boolean
    bookingId?: boolean
    serviceId?: boolean
    Pet?: boolean | BookingService$PetArgs<ExtArgs>
    Booking?: boolean | BookingService$BookingArgs<ExtArgs>
    Service?: boolean | BookingService$ServiceArgs<ExtArgs>
  }, ExtArgs["result"]["bookingService"]>



  export type BookingServiceSelectScalar = {
    id?: boolean
    petId?: boolean
    bookingId?: boolean
    serviceId?: boolean
  }

  export type BookingServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "petId" | "bookingId" | "serviceId", ExtArgs["result"]["bookingService"]>
  export type BookingServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | BookingService$PetArgs<ExtArgs>
    Booking?: boolean | BookingService$BookingArgs<ExtArgs>
    Service?: boolean | BookingService$ServiceArgs<ExtArgs>
  }

  export type $BookingServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingService"
    objects: {
      Pet: Prisma.$PetPayload<ExtArgs> | null
      Booking: Prisma.$BookingPayload<ExtArgs> | null
      Service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      petId: number | null
      bookingId: number | null
      serviceId: number | null
    }, ExtArgs["result"]["bookingService"]>
    composites: {}
  }

  type BookingServiceGetPayload<S extends boolean | null | undefined | BookingServiceDefaultArgs> = $Result.GetResult<Prisma.$BookingServicePayload, S>

  type BookingServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingServiceCountAggregateInputType | true
    }

  export interface BookingServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingService'], meta: { name: 'BookingService' } }
    /**
     * Find zero or one BookingService that matches the filter.
     * @param {BookingServiceFindUniqueArgs} args - Arguments to find a BookingService
     * @example
     * // Get one BookingService
     * const bookingService = await prisma.bookingService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingServiceFindUniqueArgs>(args: SelectSubset<T, BookingServiceFindUniqueArgs<ExtArgs>>): Prisma__BookingServiceClient<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingServiceFindUniqueOrThrowArgs} args - Arguments to find a BookingService
     * @example
     * // Get one BookingService
     * const bookingService = await prisma.bookingService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingServiceClient<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingServiceFindFirstArgs} args - Arguments to find a BookingService
     * @example
     * // Get one BookingService
     * const bookingService = await prisma.bookingService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingServiceFindFirstArgs>(args?: SelectSubset<T, BookingServiceFindFirstArgs<ExtArgs>>): Prisma__BookingServiceClient<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingServiceFindFirstOrThrowArgs} args - Arguments to find a BookingService
     * @example
     * // Get one BookingService
     * const bookingService = await prisma.bookingService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingServiceClient<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingServices
     * const bookingServices = await prisma.bookingService.findMany()
     * 
     * // Get first 10 BookingServices
     * const bookingServices = await prisma.bookingService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingServiceWithIdOnly = await prisma.bookingService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingServiceFindManyArgs>(args?: SelectSubset<T, BookingServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingService.
     * @param {BookingServiceCreateArgs} args - Arguments to create a BookingService.
     * @example
     * // Create one BookingService
     * const BookingService = await prisma.bookingService.create({
     *   data: {
     *     // ... data to create a BookingService
     *   }
     * })
     * 
     */
    create<T extends BookingServiceCreateArgs>(args: SelectSubset<T, BookingServiceCreateArgs<ExtArgs>>): Prisma__BookingServiceClient<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingServices.
     * @param {BookingServiceCreateManyArgs} args - Arguments to create many BookingServices.
     * @example
     * // Create many BookingServices
     * const bookingService = await prisma.bookingService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingServiceCreateManyArgs>(args?: SelectSubset<T, BookingServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookingService.
     * @param {BookingServiceDeleteArgs} args - Arguments to delete one BookingService.
     * @example
     * // Delete one BookingService
     * const BookingService = await prisma.bookingService.delete({
     *   where: {
     *     // ... filter to delete one BookingService
     *   }
     * })
     * 
     */
    delete<T extends BookingServiceDeleteArgs>(args: SelectSubset<T, BookingServiceDeleteArgs<ExtArgs>>): Prisma__BookingServiceClient<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingService.
     * @param {BookingServiceUpdateArgs} args - Arguments to update one BookingService.
     * @example
     * // Update one BookingService
     * const bookingService = await prisma.bookingService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingServiceUpdateArgs>(args: SelectSubset<T, BookingServiceUpdateArgs<ExtArgs>>): Prisma__BookingServiceClient<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingServices.
     * @param {BookingServiceDeleteManyArgs} args - Arguments to filter BookingServices to delete.
     * @example
     * // Delete a few BookingServices
     * const { count } = await prisma.bookingService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingServiceDeleteManyArgs>(args?: SelectSubset<T, BookingServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingServices
     * const bookingService = await prisma.bookingService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingServiceUpdateManyArgs>(args: SelectSubset<T, BookingServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingService.
     * @param {BookingServiceUpsertArgs} args - Arguments to update or create a BookingService.
     * @example
     * // Update or create a BookingService
     * const bookingService = await prisma.bookingService.upsert({
     *   create: {
     *     // ... data to create a BookingService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingService we want to update
     *   }
     * })
     */
    upsert<T extends BookingServiceUpsertArgs>(args: SelectSubset<T, BookingServiceUpsertArgs<ExtArgs>>): Prisma__BookingServiceClient<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingServiceCountArgs} args - Arguments to filter BookingServices to count.
     * @example
     * // Count the number of BookingServices
     * const count = await prisma.bookingService.count({
     *   where: {
     *     // ... the filter for the BookingServices we want to count
     *   }
     * })
    **/
    count<T extends BookingServiceCountArgs>(
      args?: Subset<T, BookingServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingServiceAggregateArgs>(args: Subset<T, BookingServiceAggregateArgs>): Prisma.PrismaPromise<GetBookingServiceAggregateType<T>>

    /**
     * Group by BookingService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingServiceGroupByArgs['orderBy'] }
        : { orderBy?: BookingServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingService model
   */
  readonly fields: BookingServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pet<T extends BookingService$PetArgs<ExtArgs> = {}>(args?: Subset<T, BookingService$PetArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Booking<T extends BookingService$BookingArgs<ExtArgs> = {}>(args?: Subset<T, BookingService$BookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Service<T extends BookingService$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, BookingService$ServiceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingService model
   */
  interface BookingServiceFieldRefs {
    readonly id: FieldRef<"BookingService", 'Int'>
    readonly petId: FieldRef<"BookingService", 'Int'>
    readonly bookingId: FieldRef<"BookingService", 'Int'>
    readonly serviceId: FieldRef<"BookingService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingService findUnique
   */
  export type BookingServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookingService to fetch.
     */
    where: BookingServiceWhereUniqueInput
  }

  /**
   * BookingService findUniqueOrThrow
   */
  export type BookingServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookingService to fetch.
     */
    where: BookingServiceWhereUniqueInput
  }

  /**
   * BookingService findFirst
   */
  export type BookingServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookingService to fetch.
     */
    where?: BookingServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingServices to fetch.
     */
    orderBy?: BookingServiceOrderByWithRelationInput | BookingServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingServices.
     */
    cursor?: BookingServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingServices.
     */
    distinct?: BookingServiceScalarFieldEnum | BookingServiceScalarFieldEnum[]
  }

  /**
   * BookingService findFirstOrThrow
   */
  export type BookingServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookingService to fetch.
     */
    where?: BookingServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingServices to fetch.
     */
    orderBy?: BookingServiceOrderByWithRelationInput | BookingServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingServices.
     */
    cursor?: BookingServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingServices.
     */
    distinct?: BookingServiceScalarFieldEnum | BookingServiceScalarFieldEnum[]
  }

  /**
   * BookingService findMany
   */
  export type BookingServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookingServices to fetch.
     */
    where?: BookingServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingServices to fetch.
     */
    orderBy?: BookingServiceOrderByWithRelationInput | BookingServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingServices.
     */
    cursor?: BookingServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingServices.
     */
    skip?: number
    distinct?: BookingServiceScalarFieldEnum | BookingServiceScalarFieldEnum[]
  }

  /**
   * BookingService create
   */
  export type BookingServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingService.
     */
    data?: XOR<BookingServiceCreateInput, BookingServiceUncheckedCreateInput>
  }

  /**
   * BookingService createMany
   */
  export type BookingServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingServices.
     */
    data: BookingServiceCreateManyInput | BookingServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingService update
   */
  export type BookingServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingService.
     */
    data: XOR<BookingServiceUpdateInput, BookingServiceUncheckedUpdateInput>
    /**
     * Choose, which BookingService to update.
     */
    where: BookingServiceWhereUniqueInput
  }

  /**
   * BookingService updateMany
   */
  export type BookingServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingServices.
     */
    data: XOR<BookingServiceUpdateManyMutationInput, BookingServiceUncheckedUpdateManyInput>
    /**
     * Filter which BookingServices to update
     */
    where?: BookingServiceWhereInput
    /**
     * Limit how many BookingServices to update.
     */
    limit?: number
  }

  /**
   * BookingService upsert
   */
  export type BookingServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingService to update in case it exists.
     */
    where: BookingServiceWhereUniqueInput
    /**
     * In case the BookingService found by the `where` argument doesn't exist, create a new BookingService with this data.
     */
    create: XOR<BookingServiceCreateInput, BookingServiceUncheckedCreateInput>
    /**
     * In case the BookingService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingServiceUpdateInput, BookingServiceUncheckedUpdateInput>
  }

  /**
   * BookingService delete
   */
  export type BookingServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    /**
     * Filter which BookingService to delete.
     */
    where: BookingServiceWhereUniqueInput
  }

  /**
   * BookingService deleteMany
   */
  export type BookingServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingServices to delete
     */
    where?: BookingServiceWhereInput
    /**
     * Limit how many BookingServices to delete.
     */
    limit?: number
  }

  /**
   * BookingService.Pet
   */
  export type BookingService$PetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
  }

  /**
   * BookingService.Booking
   */
  export type BookingService$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * BookingService.Service
   */
  export type BookingService$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * BookingService without action
   */
  export type BookingServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    bookingservice?: boolean | Service$bookingserviceArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingservice?: boolean | Service$bookingserviceArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      bookingservice: Prisma.$BookingServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingservice<T extends Service$bookingserviceArgs<ExtArgs> = {}>(args?: Subset<T, Service$bookingserviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.bookingservice
   */
  export type Service$bookingserviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingService
     */
    select?: BookingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingService
     */
    omit?: BookingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingServiceInclude<ExtArgs> | null
    where?: BookingServiceWhereInput
    orderBy?: BookingServiceOrderByWithRelationInput | BookingServiceOrderByWithRelationInput[]
    cursor?: BookingServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingServiceScalarFieldEnum | BookingServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentCheck
   */

  export type AggregateAppointmentCheck = {
    _count: AppointmentCheckCountAggregateOutputType | null
    _avg: AppointmentCheckAvgAggregateOutputType | null
    _sum: AppointmentCheckSumAggregateOutputType | null
    _min: AppointmentCheckMinAggregateOutputType | null
    _max: AppointmentCheckMaxAggregateOutputType | null
  }

  export type AppointmentCheckAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bookingId: number | null
  }

  export type AppointmentCheckSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bookingId: number | null
  }

  export type AppointmentCheckMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bookingId: number | null
  }

  export type AppointmentCheckMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bookingId: number | null
  }

  export type AppointmentCheckCountAggregateOutputType = {
    id: number
    userId: number
    bookingId: number
    _all: number
  }


  export type AppointmentCheckAvgAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
  }

  export type AppointmentCheckSumAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
  }

  export type AppointmentCheckMinAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
  }

  export type AppointmentCheckMaxAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
  }

  export type AppointmentCheckCountAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    _all?: true
  }

  export type AppointmentCheckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentCheck to aggregate.
     */
    where?: AppointmentCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentChecks to fetch.
     */
    orderBy?: AppointmentCheckOrderByWithRelationInput | AppointmentCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentChecks
    **/
    _count?: true | AppointmentCheckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentCheckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentCheckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentCheckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentCheckMaxAggregateInputType
  }

  export type GetAppointmentCheckAggregateType<T extends AppointmentCheckAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentCheck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentCheck[P]>
      : GetScalarType<T[P], AggregateAppointmentCheck[P]>
  }




  export type AppointmentCheckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentCheckWhereInput
    orderBy?: AppointmentCheckOrderByWithAggregationInput | AppointmentCheckOrderByWithAggregationInput[]
    by: AppointmentCheckScalarFieldEnum[] | AppointmentCheckScalarFieldEnum
    having?: AppointmentCheckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCheckCountAggregateInputType | true
    _avg?: AppointmentCheckAvgAggregateInputType
    _sum?: AppointmentCheckSumAggregateInputType
    _min?: AppointmentCheckMinAggregateInputType
    _max?: AppointmentCheckMaxAggregateInputType
  }

  export type AppointmentCheckGroupByOutputType = {
    id: number
    userId: number | null
    bookingId: number | null
    _count: AppointmentCheckCountAggregateOutputType | null
    _avg: AppointmentCheckAvgAggregateOutputType | null
    _sum: AppointmentCheckSumAggregateOutputType | null
    _min: AppointmentCheckMinAggregateOutputType | null
    _max: AppointmentCheckMaxAggregateOutputType | null
  }

  type GetAppointmentCheckGroupByPayload<T extends AppointmentCheckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentCheckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentCheckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentCheckGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentCheckGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentCheckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    User?: boolean | AppointmentCheck$UserArgs<ExtArgs>
    Booking?: boolean | AppointmentCheck$BookingArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentCheck"]>



  export type AppointmentCheckSelectScalar = {
    id?: boolean
    userId?: boolean
    bookingId?: boolean
  }

  export type AppointmentCheckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookingId", ExtArgs["result"]["appointmentCheck"]>
  export type AppointmentCheckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AppointmentCheck$UserArgs<ExtArgs>
    Booking?: boolean | AppointmentCheck$BookingArgs<ExtArgs>
  }

  export type $AppointmentCheckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentCheck"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Booking: Prisma.$BookingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      bookingId: number | null
    }, ExtArgs["result"]["appointmentCheck"]>
    composites: {}
  }

  type AppointmentCheckGetPayload<S extends boolean | null | undefined | AppointmentCheckDefaultArgs> = $Result.GetResult<Prisma.$AppointmentCheckPayload, S>

  type AppointmentCheckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCheckCountAggregateInputType | true
    }

  export interface AppointmentCheckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentCheck'], meta: { name: 'AppointmentCheck' } }
    /**
     * Find zero or one AppointmentCheck that matches the filter.
     * @param {AppointmentCheckFindUniqueArgs} args - Arguments to find a AppointmentCheck
     * @example
     * // Get one AppointmentCheck
     * const appointmentCheck = await prisma.appointmentCheck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentCheckFindUniqueArgs>(args: SelectSubset<T, AppointmentCheckFindUniqueArgs<ExtArgs>>): Prisma__AppointmentCheckClient<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentCheck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentCheckFindUniqueOrThrowArgs} args - Arguments to find a AppointmentCheck
     * @example
     * // Get one AppointmentCheck
     * const appointmentCheck = await prisma.appointmentCheck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentCheckFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentCheckClient<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentCheck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCheckFindFirstArgs} args - Arguments to find a AppointmentCheck
     * @example
     * // Get one AppointmentCheck
     * const appointmentCheck = await prisma.appointmentCheck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentCheckFindFirstArgs>(args?: SelectSubset<T, AppointmentCheckFindFirstArgs<ExtArgs>>): Prisma__AppointmentCheckClient<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentCheck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCheckFindFirstOrThrowArgs} args - Arguments to find a AppointmentCheck
     * @example
     * // Get one AppointmentCheck
     * const appointmentCheck = await prisma.appointmentCheck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentCheckFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentCheckClient<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentChecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCheckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentChecks
     * const appointmentChecks = await prisma.appointmentCheck.findMany()
     * 
     * // Get first 10 AppointmentChecks
     * const appointmentChecks = await prisma.appointmentCheck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentCheckWithIdOnly = await prisma.appointmentCheck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentCheckFindManyArgs>(args?: SelectSubset<T, AppointmentCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentCheck.
     * @param {AppointmentCheckCreateArgs} args - Arguments to create a AppointmentCheck.
     * @example
     * // Create one AppointmentCheck
     * const AppointmentCheck = await prisma.appointmentCheck.create({
     *   data: {
     *     // ... data to create a AppointmentCheck
     *   }
     * })
     * 
     */
    create<T extends AppointmentCheckCreateArgs>(args: SelectSubset<T, AppointmentCheckCreateArgs<ExtArgs>>): Prisma__AppointmentCheckClient<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentChecks.
     * @param {AppointmentCheckCreateManyArgs} args - Arguments to create many AppointmentChecks.
     * @example
     * // Create many AppointmentChecks
     * const appointmentCheck = await prisma.appointmentCheck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCheckCreateManyArgs>(args?: SelectSubset<T, AppointmentCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppointmentCheck.
     * @param {AppointmentCheckDeleteArgs} args - Arguments to delete one AppointmentCheck.
     * @example
     * // Delete one AppointmentCheck
     * const AppointmentCheck = await prisma.appointmentCheck.delete({
     *   where: {
     *     // ... filter to delete one AppointmentCheck
     *   }
     * })
     * 
     */
    delete<T extends AppointmentCheckDeleteArgs>(args: SelectSubset<T, AppointmentCheckDeleteArgs<ExtArgs>>): Prisma__AppointmentCheckClient<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentCheck.
     * @param {AppointmentCheckUpdateArgs} args - Arguments to update one AppointmentCheck.
     * @example
     * // Update one AppointmentCheck
     * const appointmentCheck = await prisma.appointmentCheck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentCheckUpdateArgs>(args: SelectSubset<T, AppointmentCheckUpdateArgs<ExtArgs>>): Prisma__AppointmentCheckClient<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentChecks.
     * @param {AppointmentCheckDeleteManyArgs} args - Arguments to filter AppointmentChecks to delete.
     * @example
     * // Delete a few AppointmentChecks
     * const { count } = await prisma.appointmentCheck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentCheckDeleteManyArgs>(args?: SelectSubset<T, AppointmentCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCheckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentChecks
     * const appointmentCheck = await prisma.appointmentCheck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentCheckUpdateManyArgs>(args: SelectSubset<T, AppointmentCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppointmentCheck.
     * @param {AppointmentCheckUpsertArgs} args - Arguments to update or create a AppointmentCheck.
     * @example
     * // Update or create a AppointmentCheck
     * const appointmentCheck = await prisma.appointmentCheck.upsert({
     *   create: {
     *     // ... data to create a AppointmentCheck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentCheck we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentCheckUpsertArgs>(args: SelectSubset<T, AppointmentCheckUpsertArgs<ExtArgs>>): Prisma__AppointmentCheckClient<$Result.GetResult<Prisma.$AppointmentCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCheckCountArgs} args - Arguments to filter AppointmentChecks to count.
     * @example
     * // Count the number of AppointmentChecks
     * const count = await prisma.appointmentCheck.count({
     *   where: {
     *     // ... the filter for the AppointmentChecks we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCheckCountArgs>(
      args?: Subset<T, AppointmentCheckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCheckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCheckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentCheckAggregateArgs>(args: Subset<T, AppointmentCheckAggregateArgs>): Prisma.PrismaPromise<GetAppointmentCheckAggregateType<T>>

    /**
     * Group by AppointmentCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCheckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentCheckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentCheckGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentCheckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentCheck model
   */
  readonly fields: AppointmentCheckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentCheck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentCheckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends AppointmentCheck$UserArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentCheck$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Booking<T extends AppointmentCheck$BookingArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentCheck$BookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppointmentCheck model
   */
  interface AppointmentCheckFieldRefs {
    readonly id: FieldRef<"AppointmentCheck", 'Int'>
    readonly userId: FieldRef<"AppointmentCheck", 'Int'>
    readonly bookingId: FieldRef<"AppointmentCheck", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentCheck findUnique
   */
  export type AppointmentCheckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentCheck to fetch.
     */
    where: AppointmentCheckWhereUniqueInput
  }

  /**
   * AppointmentCheck findUniqueOrThrow
   */
  export type AppointmentCheckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentCheck to fetch.
     */
    where: AppointmentCheckWhereUniqueInput
  }

  /**
   * AppointmentCheck findFirst
   */
  export type AppointmentCheckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentCheck to fetch.
     */
    where?: AppointmentCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentChecks to fetch.
     */
    orderBy?: AppointmentCheckOrderByWithRelationInput | AppointmentCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentChecks.
     */
    cursor?: AppointmentCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentChecks.
     */
    distinct?: AppointmentCheckScalarFieldEnum | AppointmentCheckScalarFieldEnum[]
  }

  /**
   * AppointmentCheck findFirstOrThrow
   */
  export type AppointmentCheckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentCheck to fetch.
     */
    where?: AppointmentCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentChecks to fetch.
     */
    orderBy?: AppointmentCheckOrderByWithRelationInput | AppointmentCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentChecks.
     */
    cursor?: AppointmentCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentChecks.
     */
    distinct?: AppointmentCheckScalarFieldEnum | AppointmentCheckScalarFieldEnum[]
  }

  /**
   * AppointmentCheck findMany
   */
  export type AppointmentCheckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentChecks to fetch.
     */
    where?: AppointmentCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentChecks to fetch.
     */
    orderBy?: AppointmentCheckOrderByWithRelationInput | AppointmentCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentChecks.
     */
    cursor?: AppointmentCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentChecks.
     */
    skip?: number
    distinct?: AppointmentCheckScalarFieldEnum | AppointmentCheckScalarFieldEnum[]
  }

  /**
   * AppointmentCheck create
   */
  export type AppointmentCheckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentCheck.
     */
    data?: XOR<AppointmentCheckCreateInput, AppointmentCheckUncheckedCreateInput>
  }

  /**
   * AppointmentCheck createMany
   */
  export type AppointmentCheckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentChecks.
     */
    data: AppointmentCheckCreateManyInput | AppointmentCheckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentCheck update
   */
  export type AppointmentCheckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentCheck.
     */
    data: XOR<AppointmentCheckUpdateInput, AppointmentCheckUncheckedUpdateInput>
    /**
     * Choose, which AppointmentCheck to update.
     */
    where: AppointmentCheckWhereUniqueInput
  }

  /**
   * AppointmentCheck updateMany
   */
  export type AppointmentCheckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentChecks.
     */
    data: XOR<AppointmentCheckUpdateManyMutationInput, AppointmentCheckUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentChecks to update
     */
    where?: AppointmentCheckWhereInput
    /**
     * Limit how many AppointmentChecks to update.
     */
    limit?: number
  }

  /**
   * AppointmentCheck upsert
   */
  export type AppointmentCheckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentCheck to update in case it exists.
     */
    where: AppointmentCheckWhereUniqueInput
    /**
     * In case the AppointmentCheck found by the `where` argument doesn't exist, create a new AppointmentCheck with this data.
     */
    create: XOR<AppointmentCheckCreateInput, AppointmentCheckUncheckedCreateInput>
    /**
     * In case the AppointmentCheck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentCheckUpdateInput, AppointmentCheckUncheckedUpdateInput>
  }

  /**
   * AppointmentCheck delete
   */
  export type AppointmentCheckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
    /**
     * Filter which AppointmentCheck to delete.
     */
    where: AppointmentCheckWhereUniqueInput
  }

  /**
   * AppointmentCheck deleteMany
   */
  export type AppointmentCheckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentChecks to delete
     */
    where?: AppointmentCheckWhereInput
    /**
     * Limit how many AppointmentChecks to delete.
     */
    limit?: number
  }

  /**
   * AppointmentCheck.User
   */
  export type AppointmentCheck$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AppointmentCheck.Booking
   */
  export type AppointmentCheck$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * AppointmentCheck without action
   */
  export type AppointmentCheckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCheck
     */
    select?: AppointmentCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentCheck
     */
    omit?: AppointmentCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentCheckInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    name: string
    email: string
    note: string
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>



  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      note: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly note: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    blood: 'blood',
    breed: 'breed',
    age: 'age',
    gender: 'gender',
    userId: 'userId'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    datenow: 'datenow',
    date: 'date',
    time: 'time',
    status: 'status',
    userId: 'userId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingServiceScalarFieldEnum: {
    id: 'id',
    petId: 'petId',
    bookingId: 'bookingId',
    serviceId: 'serviceId'
  };

  export type BookingServiceScalarFieldEnum = (typeof BookingServiceScalarFieldEnum)[keyof typeof BookingServiceScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const AppointmentCheckScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookingId: 'bookingId'
  };

  export type AppointmentCheckScalarFieldEnum = (typeof AppointmentCheckScalarFieldEnum)[keyof typeof AppointmentCheckScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PetOrderByRelevanceFieldEnum: {
    name: 'name',
    type: 'type',
    blood: 'blood',
    breed: 'breed',
    gender: 'gender'
  };

  export type PetOrderByRelevanceFieldEnum = (typeof PetOrderByRelevanceFieldEnum)[keyof typeof PetOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    date: 'date',
    time: 'time'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


  export const ContactOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    note: 'note'
  };

  export type ContactOrderByRelevanceFieldEnum = (typeof ContactOrderByRelevanceFieldEnum)[keyof typeof ContactOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    pet?: PetListRelationFilter
    booking?: BookingListRelationFilter
    appointmentcheck?: AppointmentCheckListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
    pet?: PetOrderByRelationAggregateInput
    booking?: BookingOrderByRelationAggregateInput
    appointmentcheck?: AppointmentCheckOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    pet?: PetListRelationFilter
    booking?: BookingListRelationFilter
    appointmentcheck?: AppointmentCheckListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    type?: StringFilter<"Pet"> | string
    blood?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    age?: IntFilter<"Pet"> | number
    gender?: StringNullableFilter<"Pet"> | string | null
    userId?: IntNullableFilter<"Pet"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bookingservice?: BookingServiceListRelationFilter
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    blood?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    gender?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    bookingservice?: BookingServiceOrderByRelationAggregateInput
    _relevance?: PetOrderByRelevanceInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    type?: StringFilter<"Pet"> | string
    blood?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    age?: IntFilter<"Pet"> | number
    gender?: StringNullableFilter<"Pet"> | string | null
    userId?: IntNullableFilter<"Pet"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bookingservice?: BookingServiceListRelationFilter
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    blood?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    gender?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pet"> | number
    name?: StringWithAggregatesFilter<"Pet"> | string
    type?: StringWithAggregatesFilter<"Pet"> | string
    blood?: StringWithAggregatesFilter<"Pet"> | string
    breed?: StringWithAggregatesFilter<"Pet"> | string
    age?: IntWithAggregatesFilter<"Pet"> | number
    gender?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Pet"> | number | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    datenow?: DateTimeFilter<"Booking"> | Date | string
    date?: StringFilter<"Booking"> | string
    time?: StringFilter<"Booking"> | string
    status?: EnumStatusFilter<"Booking"> | $Enums.Status
    userId?: IntNullableFilter<"Booking"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    appointmentcheck?: AppointmentCheckListRelationFilter
    bookingservice?: BookingServiceListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    datenow?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    appointmentcheck?: AppointmentCheckOrderByRelationAggregateInput
    bookingservice?: BookingServiceOrderByRelationAggregateInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    datenow?: DateTimeFilter<"Booking"> | Date | string
    date?: StringFilter<"Booking"> | string
    time?: StringFilter<"Booking"> | string
    status?: EnumStatusFilter<"Booking"> | $Enums.Status
    userId?: IntNullableFilter<"Booking"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    appointmentcheck?: AppointmentCheckListRelationFilter
    bookingservice?: BookingServiceListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    datenow?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    datenow?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    date?: StringWithAggregatesFilter<"Booking"> | string
    time?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumStatusWithAggregatesFilter<"Booking"> | $Enums.Status
    userId?: IntNullableWithAggregatesFilter<"Booking"> | number | null
  }

  export type BookingServiceWhereInput = {
    AND?: BookingServiceWhereInput | BookingServiceWhereInput[]
    OR?: BookingServiceWhereInput[]
    NOT?: BookingServiceWhereInput | BookingServiceWhereInput[]
    id?: IntFilter<"BookingService"> | number
    petId?: IntNullableFilter<"BookingService"> | number | null
    bookingId?: IntNullableFilter<"BookingService"> | number | null
    serviceId?: IntNullableFilter<"BookingService"> | number | null
    Pet?: XOR<PetNullableScalarRelationFilter, PetWhereInput> | null
    Booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    Service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }

  export type BookingServiceOrderByWithRelationInput = {
    id?: SortOrder
    petId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    Pet?: PetOrderByWithRelationInput
    Booking?: BookingOrderByWithRelationInput
    Service?: ServiceOrderByWithRelationInput
  }

  export type BookingServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingServiceWhereInput | BookingServiceWhereInput[]
    OR?: BookingServiceWhereInput[]
    NOT?: BookingServiceWhereInput | BookingServiceWhereInput[]
    petId?: IntNullableFilter<"BookingService"> | number | null
    bookingId?: IntNullableFilter<"BookingService"> | number | null
    serviceId?: IntNullableFilter<"BookingService"> | number | null
    Pet?: XOR<PetNullableScalarRelationFilter, PetWhereInput> | null
    Booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    Service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }, "id">

  export type BookingServiceOrderByWithAggregationInput = {
    id?: SortOrder
    petId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    _count?: BookingServiceCountOrderByAggregateInput
    _avg?: BookingServiceAvgOrderByAggregateInput
    _max?: BookingServiceMaxOrderByAggregateInput
    _min?: BookingServiceMinOrderByAggregateInput
    _sum?: BookingServiceSumOrderByAggregateInput
  }

  export type BookingServiceScalarWhereWithAggregatesInput = {
    AND?: BookingServiceScalarWhereWithAggregatesInput | BookingServiceScalarWhereWithAggregatesInput[]
    OR?: BookingServiceScalarWhereWithAggregatesInput[]
    NOT?: BookingServiceScalarWhereWithAggregatesInput | BookingServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingService"> | number
    petId?: IntNullableWithAggregatesFilter<"BookingService"> | number | null
    bookingId?: IntNullableWithAggregatesFilter<"BookingService"> | number | null
    serviceId?: IntNullableWithAggregatesFilter<"BookingService"> | number | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    bookingservice?: BookingServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    bookingservice?: BookingServiceOrderByRelationAggregateInput
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    bookingservice?: BookingServiceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
  }

  export type AppointmentCheckWhereInput = {
    AND?: AppointmentCheckWhereInput | AppointmentCheckWhereInput[]
    OR?: AppointmentCheckWhereInput[]
    NOT?: AppointmentCheckWhereInput | AppointmentCheckWhereInput[]
    id?: IntFilter<"AppointmentCheck"> | number
    userId?: IntNullableFilter<"AppointmentCheck"> | number | null
    bookingId?: IntNullableFilter<"AppointmentCheck"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }

  export type AppointmentCheckOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Booking?: BookingOrderByWithRelationInput
  }

  export type AppointmentCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentCheckWhereInput | AppointmentCheckWhereInput[]
    OR?: AppointmentCheckWhereInput[]
    NOT?: AppointmentCheckWhereInput | AppointmentCheckWhereInput[]
    userId?: IntNullableFilter<"AppointmentCheck"> | number | null
    bookingId?: IntNullableFilter<"AppointmentCheck"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }, "id">

  export type AppointmentCheckOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    _count?: AppointmentCheckCountOrderByAggregateInput
    _avg?: AppointmentCheckAvgOrderByAggregateInput
    _max?: AppointmentCheckMaxOrderByAggregateInput
    _min?: AppointmentCheckMinOrderByAggregateInput
    _sum?: AppointmentCheckSumOrderByAggregateInput
  }

  export type AppointmentCheckScalarWhereWithAggregatesInput = {
    AND?: AppointmentCheckScalarWhereWithAggregatesInput | AppointmentCheckScalarWhereWithAggregatesInput[]
    OR?: AppointmentCheckScalarWhereWithAggregatesInput[]
    NOT?: AppointmentCheckScalarWhereWithAggregatesInput | AppointmentCheckScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppointmentCheck"> | number
    userId?: IntNullableWithAggregatesFilter<"AppointmentCheck"> | number | null
    bookingId?: IntNullableWithAggregatesFilter<"AppointmentCheck"> | number | null
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    note?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ContactOrderByRelevanceInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    note?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    note?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
    pet?: PetCreateNestedManyWithoutUserInput
    booking?: BookingCreateNestedManyWithoutUserInput
    appointmentcheck?: AppointmentCheckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
    pet?: PetUncheckedCreateNestedManyWithoutUserInput
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    appointmentcheck?: AppointmentCheckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pet?: PetUpdateManyWithoutUserNestedInput
    booking?: BookingUpdateManyWithoutUserNestedInput
    appointmentcheck?: AppointmentCheckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pet?: PetUncheckedUpdateManyWithoutUserNestedInput
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    appointmentcheck?: AppointmentCheckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PetCreateInput = {
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender?: string | null
    user?: UserCreateNestedOneWithoutPetInput
    bookingservice?: BookingServiceCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender?: string | null
    userId?: number | null
    bookingservice?: BookingServiceUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutPetNestedInput
    bookingservice?: BookingServiceUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingservice?: BookingServiceUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: number
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender?: string | null
    userId?: number | null
  }

  export type PetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingCreateInput = {
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    User?: UserCreateNestedOneWithoutBookingInput
    appointmentcheck?: AppointmentCheckCreateNestedManyWithoutBookingInput
    bookingservice?: BookingServiceCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    userId?: number | null
    appointmentcheck?: AppointmentCheckUncheckedCreateNestedManyWithoutBookingInput
    bookingservice?: BookingServiceUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    User?: UserUpdateOneWithoutBookingNestedInput
    appointmentcheck?: AppointmentCheckUpdateManyWithoutBookingNestedInput
    bookingservice?: BookingServiceUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentcheck?: AppointmentCheckUncheckedUpdateManyWithoutBookingNestedInput
    bookingservice?: BookingServiceUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    userId?: number | null
  }

  export type BookingUpdateManyMutationInput = {
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingServiceCreateInput = {
    Pet?: PetCreateNestedOneWithoutBookingserviceInput
    Booking?: BookingCreateNestedOneWithoutBookingserviceInput
    Service?: ServiceCreateNestedOneWithoutBookingserviceInput
  }

  export type BookingServiceUncheckedCreateInput = {
    id?: number
    petId?: number | null
    bookingId?: number | null
    serviceId?: number | null
  }

  export type BookingServiceUpdateInput = {
    Pet?: PetUpdateOneWithoutBookingserviceNestedInput
    Booking?: BookingUpdateOneWithoutBookingserviceNestedInput
    Service?: ServiceUpdateOneWithoutBookingserviceNestedInput
  }

  export type BookingServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingServiceCreateManyInput = {
    id?: number
    petId?: number | null
    bookingId?: number | null
    serviceId?: number | null
  }

  export type BookingServiceUpdateManyMutationInput = {

  }

  export type BookingServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceCreateInput = {
    name: string
    description: string
    bookingservice?: BookingServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    bookingservice?: BookingServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    bookingservice?: BookingServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    bookingservice?: BookingServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCheckCreateInput = {
    User?: UserCreateNestedOneWithoutAppointmentcheckInput
    Booking?: BookingCreateNestedOneWithoutAppointmentcheckInput
  }

  export type AppointmentCheckUncheckedCreateInput = {
    id?: number
    userId?: number | null
    bookingId?: number | null
  }

  export type AppointmentCheckUpdateInput = {
    User?: UserUpdateOneWithoutAppointmentcheckNestedInput
    Booking?: BookingUpdateOneWithoutAppointmentcheckNestedInput
  }

  export type AppointmentCheckUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AppointmentCheckCreateManyInput = {
    id?: number
    userId?: number | null
    bookingId?: number | null
  }

  export type AppointmentCheckUpdateManyMutationInput = {

  }

  export type AppointmentCheckUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContactCreateInput = {
    name: string
    email: string
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    name: string
    email: string
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type AppointmentCheckListRelationFilter = {
    every?: AppointmentCheckWhereInput
    some?: AppointmentCheckWhereInput
    none?: AppointmentCheckWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentCheckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BookingServiceListRelationFilter = {
    every?: BookingServiceWhereInput
    some?: BookingServiceWhereInput
    none?: BookingServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetOrderByRelevanceInput = {
    fields: PetOrderByRelevanceFieldEnum | PetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    blood?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    userId?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    blood?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    blood?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    datenow?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    datenow?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    datenow?: SortOrder
    date?: SortOrder
    time?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type PetNullableScalarRelationFilter = {
    is?: PetWhereInput | null
    isNot?: PetWhereInput | null
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type BookingServiceCountOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    bookingId?: SortOrder
    serviceId?: SortOrder
  }

  export type BookingServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    bookingId?: SortOrder
    serviceId?: SortOrder
  }

  export type BookingServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    bookingId?: SortOrder
    serviceId?: SortOrder
  }

  export type BookingServiceMinOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    bookingId?: SortOrder
    serviceId?: SortOrder
  }

  export type BookingServiceSumOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    bookingId?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceOrderByRelevanceInput = {
    fields: ServiceOrderByRelevanceFieldEnum | ServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppointmentCheckCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type AppointmentCheckAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type AppointmentCheckMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type AppointmentCheckMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type AppointmentCheckSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type ContactOrderByRelevanceInput = {
    fields: ContactOrderByRelevanceFieldEnum | ContactOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PetCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AppointmentCheckCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCheckCreateWithoutUserInput, AppointmentCheckUncheckedCreateWithoutUserInput> | AppointmentCheckCreateWithoutUserInput[] | AppointmentCheckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCheckCreateOrConnectWithoutUserInput | AppointmentCheckCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCheckCreateManyUserInputEnvelope
    connect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AppointmentCheckUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCheckCreateWithoutUserInput, AppointmentCheckUncheckedCreateWithoutUserInput> | AppointmentCheckCreateWithoutUserInput[] | AppointmentCheckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCheckCreateOrConnectWithoutUserInput | AppointmentCheckCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCheckCreateManyUserInputEnvelope
    connect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AppointmentCheckUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCheckCreateWithoutUserInput, AppointmentCheckUncheckedCreateWithoutUserInput> | AppointmentCheckCreateWithoutUserInput[] | AppointmentCheckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCheckCreateOrConnectWithoutUserInput | AppointmentCheckCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentCheckUpsertWithWhereUniqueWithoutUserInput | AppointmentCheckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCheckCreateManyUserInputEnvelope
    set?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    disconnect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    delete?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    connect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    update?: AppointmentCheckUpdateWithWhereUniqueWithoutUserInput | AppointmentCheckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentCheckUpdateManyWithWhereWithoutUserInput | AppointmentCheckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentCheckScalarWhereInput | AppointmentCheckScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AppointmentCheckUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCheckCreateWithoutUserInput, AppointmentCheckUncheckedCreateWithoutUserInput> | AppointmentCheckCreateWithoutUserInput[] | AppointmentCheckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCheckCreateOrConnectWithoutUserInput | AppointmentCheckCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentCheckUpsertWithWhereUniqueWithoutUserInput | AppointmentCheckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCheckCreateManyUserInputEnvelope
    set?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    disconnect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    delete?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    connect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    update?: AppointmentCheckUpdateWithWhereUniqueWithoutUserInput | AppointmentCheckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentCheckUpdateManyWithWhereWithoutUserInput | AppointmentCheckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentCheckScalarWhereInput | AppointmentCheckScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPetInput = {
    create?: XOR<UserCreateWithoutPetInput, UserUncheckedCreateWithoutPetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetInput
    connect?: UserWhereUniqueInput
  }

  export type BookingServiceCreateNestedManyWithoutPetInput = {
    create?: XOR<BookingServiceCreateWithoutPetInput, BookingServiceUncheckedCreateWithoutPetInput> | BookingServiceCreateWithoutPetInput[] | BookingServiceUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutPetInput | BookingServiceCreateOrConnectWithoutPetInput[]
    createMany?: BookingServiceCreateManyPetInputEnvelope
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
  }

  export type BookingServiceUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<BookingServiceCreateWithoutPetInput, BookingServiceUncheckedCreateWithoutPetInput> | BookingServiceCreateWithoutPetInput[] | BookingServiceUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutPetInput | BookingServiceCreateOrConnectWithoutPetInput[]
    createMany?: BookingServiceCreateManyPetInputEnvelope
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutPetNestedInput = {
    create?: XOR<UserCreateWithoutPetInput, UserUncheckedCreateWithoutPetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetInput
    upsert?: UserUpsertWithoutPetInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetInput, UserUpdateWithoutPetInput>, UserUncheckedUpdateWithoutPetInput>
  }

  export type BookingServiceUpdateManyWithoutPetNestedInput = {
    create?: XOR<BookingServiceCreateWithoutPetInput, BookingServiceUncheckedCreateWithoutPetInput> | BookingServiceCreateWithoutPetInput[] | BookingServiceUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutPetInput | BookingServiceCreateOrConnectWithoutPetInput[]
    upsert?: BookingServiceUpsertWithWhereUniqueWithoutPetInput | BookingServiceUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: BookingServiceCreateManyPetInputEnvelope
    set?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    disconnect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    delete?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    update?: BookingServiceUpdateWithWhereUniqueWithoutPetInput | BookingServiceUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: BookingServiceUpdateManyWithWhereWithoutPetInput | BookingServiceUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: BookingServiceScalarWhereInput | BookingServiceScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingServiceUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<BookingServiceCreateWithoutPetInput, BookingServiceUncheckedCreateWithoutPetInput> | BookingServiceCreateWithoutPetInput[] | BookingServiceUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutPetInput | BookingServiceCreateOrConnectWithoutPetInput[]
    upsert?: BookingServiceUpsertWithWhereUniqueWithoutPetInput | BookingServiceUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: BookingServiceCreateManyPetInputEnvelope
    set?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    disconnect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    delete?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    update?: BookingServiceUpdateWithWhereUniqueWithoutPetInput | BookingServiceUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: BookingServiceUpdateManyWithWhereWithoutPetInput | BookingServiceUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: BookingServiceScalarWhereInput | BookingServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCheckCreateNestedManyWithoutBookingInput = {
    create?: XOR<AppointmentCheckCreateWithoutBookingInput, AppointmentCheckUncheckedCreateWithoutBookingInput> | AppointmentCheckCreateWithoutBookingInput[] | AppointmentCheckUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AppointmentCheckCreateOrConnectWithoutBookingInput | AppointmentCheckCreateOrConnectWithoutBookingInput[]
    createMany?: AppointmentCheckCreateManyBookingInputEnvelope
    connect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
  }

  export type BookingServiceCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingServiceCreateWithoutBookingInput, BookingServiceUncheckedCreateWithoutBookingInput> | BookingServiceCreateWithoutBookingInput[] | BookingServiceUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutBookingInput | BookingServiceCreateOrConnectWithoutBookingInput[]
    createMany?: BookingServiceCreateManyBookingInputEnvelope
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
  }

  export type AppointmentCheckUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<AppointmentCheckCreateWithoutBookingInput, AppointmentCheckUncheckedCreateWithoutBookingInput> | AppointmentCheckCreateWithoutBookingInput[] | AppointmentCheckUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AppointmentCheckCreateOrConnectWithoutBookingInput | AppointmentCheckCreateOrConnectWithoutBookingInput[]
    createMany?: AppointmentCheckCreateManyBookingInputEnvelope
    connect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
  }

  export type BookingServiceUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingServiceCreateWithoutBookingInput, BookingServiceUncheckedCreateWithoutBookingInput> | BookingServiceCreateWithoutBookingInput[] | BookingServiceUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutBookingInput | BookingServiceCreateOrConnectWithoutBookingInput[]
    createMany?: BookingServiceCreateManyBookingInputEnvelope
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneWithoutBookingNestedInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    upsert?: UserUpsertWithoutBookingInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingInput, UserUpdateWithoutBookingInput>, UserUncheckedUpdateWithoutBookingInput>
  }

  export type AppointmentCheckUpdateManyWithoutBookingNestedInput = {
    create?: XOR<AppointmentCheckCreateWithoutBookingInput, AppointmentCheckUncheckedCreateWithoutBookingInput> | AppointmentCheckCreateWithoutBookingInput[] | AppointmentCheckUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AppointmentCheckCreateOrConnectWithoutBookingInput | AppointmentCheckCreateOrConnectWithoutBookingInput[]
    upsert?: AppointmentCheckUpsertWithWhereUniqueWithoutBookingInput | AppointmentCheckUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: AppointmentCheckCreateManyBookingInputEnvelope
    set?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    disconnect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    delete?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    connect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    update?: AppointmentCheckUpdateWithWhereUniqueWithoutBookingInput | AppointmentCheckUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: AppointmentCheckUpdateManyWithWhereWithoutBookingInput | AppointmentCheckUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: AppointmentCheckScalarWhereInput | AppointmentCheckScalarWhereInput[]
  }

  export type BookingServiceUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingServiceCreateWithoutBookingInput, BookingServiceUncheckedCreateWithoutBookingInput> | BookingServiceCreateWithoutBookingInput[] | BookingServiceUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutBookingInput | BookingServiceCreateOrConnectWithoutBookingInput[]
    upsert?: BookingServiceUpsertWithWhereUniqueWithoutBookingInput | BookingServiceUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingServiceCreateManyBookingInputEnvelope
    set?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    disconnect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    delete?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    update?: BookingServiceUpdateWithWhereUniqueWithoutBookingInput | BookingServiceUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingServiceUpdateManyWithWhereWithoutBookingInput | BookingServiceUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingServiceScalarWhereInput | BookingServiceScalarWhereInput[]
  }

  export type AppointmentCheckUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<AppointmentCheckCreateWithoutBookingInput, AppointmentCheckUncheckedCreateWithoutBookingInput> | AppointmentCheckCreateWithoutBookingInput[] | AppointmentCheckUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: AppointmentCheckCreateOrConnectWithoutBookingInput | AppointmentCheckCreateOrConnectWithoutBookingInput[]
    upsert?: AppointmentCheckUpsertWithWhereUniqueWithoutBookingInput | AppointmentCheckUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: AppointmentCheckCreateManyBookingInputEnvelope
    set?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    disconnect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    delete?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    connect?: AppointmentCheckWhereUniqueInput | AppointmentCheckWhereUniqueInput[]
    update?: AppointmentCheckUpdateWithWhereUniqueWithoutBookingInput | AppointmentCheckUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: AppointmentCheckUpdateManyWithWhereWithoutBookingInput | AppointmentCheckUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: AppointmentCheckScalarWhereInput | AppointmentCheckScalarWhereInput[]
  }

  export type BookingServiceUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingServiceCreateWithoutBookingInput, BookingServiceUncheckedCreateWithoutBookingInput> | BookingServiceCreateWithoutBookingInput[] | BookingServiceUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutBookingInput | BookingServiceCreateOrConnectWithoutBookingInput[]
    upsert?: BookingServiceUpsertWithWhereUniqueWithoutBookingInput | BookingServiceUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingServiceCreateManyBookingInputEnvelope
    set?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    disconnect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    delete?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    update?: BookingServiceUpdateWithWhereUniqueWithoutBookingInput | BookingServiceUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingServiceUpdateManyWithWhereWithoutBookingInput | BookingServiceUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingServiceScalarWhereInput | BookingServiceScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutBookingserviceInput = {
    create?: XOR<PetCreateWithoutBookingserviceInput, PetUncheckedCreateWithoutBookingserviceInput>
    connectOrCreate?: PetCreateOrConnectWithoutBookingserviceInput
    connect?: PetWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutBookingserviceInput = {
    create?: XOR<BookingCreateWithoutBookingserviceInput, BookingUncheckedCreateWithoutBookingserviceInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingserviceInput
    connect?: BookingWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutBookingserviceInput = {
    create?: XOR<ServiceCreateWithoutBookingserviceInput, ServiceUncheckedCreateWithoutBookingserviceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingserviceInput
    connect?: ServiceWhereUniqueInput
  }

  export type PetUpdateOneWithoutBookingserviceNestedInput = {
    create?: XOR<PetCreateWithoutBookingserviceInput, PetUncheckedCreateWithoutBookingserviceInput>
    connectOrCreate?: PetCreateOrConnectWithoutBookingserviceInput
    upsert?: PetUpsertWithoutBookingserviceInput
    disconnect?: PetWhereInput | boolean
    delete?: PetWhereInput | boolean
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutBookingserviceInput, PetUpdateWithoutBookingserviceInput>, PetUncheckedUpdateWithoutBookingserviceInput>
  }

  export type BookingUpdateOneWithoutBookingserviceNestedInput = {
    create?: XOR<BookingCreateWithoutBookingserviceInput, BookingUncheckedCreateWithoutBookingserviceInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingserviceInput
    upsert?: BookingUpsertWithoutBookingserviceInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutBookingserviceInput, BookingUpdateWithoutBookingserviceInput>, BookingUncheckedUpdateWithoutBookingserviceInput>
  }

  export type ServiceUpdateOneWithoutBookingserviceNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingserviceInput, ServiceUncheckedCreateWithoutBookingserviceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingserviceInput
    upsert?: ServiceUpsertWithoutBookingserviceInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookingserviceInput, ServiceUpdateWithoutBookingserviceInput>, ServiceUncheckedUpdateWithoutBookingserviceInput>
  }

  export type BookingServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingServiceCreateWithoutServiceInput, BookingServiceUncheckedCreateWithoutServiceInput> | BookingServiceCreateWithoutServiceInput[] | BookingServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutServiceInput | BookingServiceCreateOrConnectWithoutServiceInput[]
    createMany?: BookingServiceCreateManyServiceInputEnvelope
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
  }

  export type BookingServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingServiceCreateWithoutServiceInput, BookingServiceUncheckedCreateWithoutServiceInput> | BookingServiceCreateWithoutServiceInput[] | BookingServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutServiceInput | BookingServiceCreateOrConnectWithoutServiceInput[]
    createMany?: BookingServiceCreateManyServiceInputEnvelope
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
  }

  export type BookingServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingServiceCreateWithoutServiceInput, BookingServiceUncheckedCreateWithoutServiceInput> | BookingServiceCreateWithoutServiceInput[] | BookingServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutServiceInput | BookingServiceCreateOrConnectWithoutServiceInput[]
    upsert?: BookingServiceUpsertWithWhereUniqueWithoutServiceInput | BookingServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingServiceCreateManyServiceInputEnvelope
    set?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    disconnect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    delete?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    update?: BookingServiceUpdateWithWhereUniqueWithoutServiceInput | BookingServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingServiceUpdateManyWithWhereWithoutServiceInput | BookingServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingServiceScalarWhereInput | BookingServiceScalarWhereInput[]
  }

  export type BookingServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingServiceCreateWithoutServiceInput, BookingServiceUncheckedCreateWithoutServiceInput> | BookingServiceCreateWithoutServiceInput[] | BookingServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingServiceCreateOrConnectWithoutServiceInput | BookingServiceCreateOrConnectWithoutServiceInput[]
    upsert?: BookingServiceUpsertWithWhereUniqueWithoutServiceInput | BookingServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingServiceCreateManyServiceInputEnvelope
    set?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    disconnect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    delete?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    connect?: BookingServiceWhereUniqueInput | BookingServiceWhereUniqueInput[]
    update?: BookingServiceUpdateWithWhereUniqueWithoutServiceInput | BookingServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingServiceUpdateManyWithWhereWithoutServiceInput | BookingServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingServiceScalarWhereInput | BookingServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppointmentcheckInput = {
    create?: XOR<UserCreateWithoutAppointmentcheckInput, UserUncheckedCreateWithoutAppointmentcheckInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentcheckInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutAppointmentcheckInput = {
    create?: XOR<BookingCreateWithoutAppointmentcheckInput, BookingUncheckedCreateWithoutAppointmentcheckInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAppointmentcheckInput
    connect?: BookingWhereUniqueInput
  }

  export type UserUpdateOneWithoutAppointmentcheckNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentcheckInput, UserUncheckedCreateWithoutAppointmentcheckInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentcheckInput
    upsert?: UserUpsertWithoutAppointmentcheckInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentcheckInput, UserUpdateWithoutAppointmentcheckInput>, UserUncheckedUpdateWithoutAppointmentcheckInput>
  }

  export type BookingUpdateOneWithoutAppointmentcheckNestedInput = {
    create?: XOR<BookingCreateWithoutAppointmentcheckInput, BookingUncheckedCreateWithoutAppointmentcheckInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAppointmentcheckInput
    upsert?: BookingUpsertWithoutAppointmentcheckInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutAppointmentcheckInput, BookingUpdateWithoutAppointmentcheckInput>, BookingUncheckedUpdateWithoutAppointmentcheckInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type PetCreateWithoutUserInput = {
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender?: string | null
    bookingservice?: BookingServiceCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender?: string | null
    bookingservice?: BookingServiceUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutUserInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetCreateManyUserInputEnvelope = {
    data: PetCreateManyUserInput | PetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    appointmentcheck?: AppointmentCheckCreateNestedManyWithoutBookingInput
    bookingservice?: BookingServiceCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    appointmentcheck?: AppointmentCheckUncheckedCreateNestedManyWithoutBookingInput
    bookingservice?: BookingServiceUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCheckCreateWithoutUserInput = {
    Booking?: BookingCreateNestedOneWithoutAppointmentcheckInput
  }

  export type AppointmentCheckUncheckedCreateWithoutUserInput = {
    id?: number
    bookingId?: number | null
  }

  export type AppointmentCheckCreateOrConnectWithoutUserInput = {
    where: AppointmentCheckWhereUniqueInput
    create: XOR<AppointmentCheckCreateWithoutUserInput, AppointmentCheckUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCheckCreateManyUserInputEnvelope = {
    data: AppointmentCheckCreateManyUserInput | AppointmentCheckCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetUpdateWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
  }

  export type PetUpdateManyWithWhereWithoutUserInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutUserInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    type?: StringFilter<"Pet"> | string
    blood?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    age?: IntFilter<"Pet"> | number
    gender?: StringNullableFilter<"Pet"> | string | null
    userId?: IntNullableFilter<"Pet"> | number | null
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    datenow?: DateTimeFilter<"Booking"> | Date | string
    date?: StringFilter<"Booking"> | string
    time?: StringFilter<"Booking"> | string
    status?: EnumStatusFilter<"Booking"> | $Enums.Status
    userId?: IntNullableFilter<"Booking"> | number | null
  }

  export type AppointmentCheckUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentCheckWhereUniqueInput
    update: XOR<AppointmentCheckUpdateWithoutUserInput, AppointmentCheckUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCheckCreateWithoutUserInput, AppointmentCheckUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCheckUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentCheckWhereUniqueInput
    data: XOR<AppointmentCheckUpdateWithoutUserInput, AppointmentCheckUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentCheckUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentCheckScalarWhereInput
    data: XOR<AppointmentCheckUpdateManyMutationInput, AppointmentCheckUncheckedUpdateManyWithoutUserInput>
  }

  export type AppointmentCheckScalarWhereInput = {
    AND?: AppointmentCheckScalarWhereInput | AppointmentCheckScalarWhereInput[]
    OR?: AppointmentCheckScalarWhereInput[]
    NOT?: AppointmentCheckScalarWhereInput | AppointmentCheckScalarWhereInput[]
    id?: IntFilter<"AppointmentCheck"> | number
    userId?: IntNullableFilter<"AppointmentCheck"> | number | null
    bookingId?: IntNullableFilter<"AppointmentCheck"> | number | null
  }

  export type UserCreateWithoutPetInput = {
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
    booking?: BookingCreateNestedManyWithoutUserInput
    appointmentcheck?: AppointmentCheckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPetInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    appointmentcheck?: AppointmentCheckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetInput, UserUncheckedCreateWithoutPetInput>
  }

  export type BookingServiceCreateWithoutPetInput = {
    Booking?: BookingCreateNestedOneWithoutBookingserviceInput
    Service?: ServiceCreateNestedOneWithoutBookingserviceInput
  }

  export type BookingServiceUncheckedCreateWithoutPetInput = {
    id?: number
    bookingId?: number | null
    serviceId?: number | null
  }

  export type BookingServiceCreateOrConnectWithoutPetInput = {
    where: BookingServiceWhereUniqueInput
    create: XOR<BookingServiceCreateWithoutPetInput, BookingServiceUncheckedCreateWithoutPetInput>
  }

  export type BookingServiceCreateManyPetInputEnvelope = {
    data: BookingServiceCreateManyPetInput | BookingServiceCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPetInput = {
    update: XOR<UserUpdateWithoutPetInput, UserUncheckedUpdateWithoutPetInput>
    create: XOR<UserCreateWithoutPetInput, UserUncheckedCreateWithoutPetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetInput, UserUncheckedUpdateWithoutPetInput>
  }

  export type UserUpdateWithoutPetInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    booking?: BookingUpdateManyWithoutUserNestedInput
    appointmentcheck?: AppointmentCheckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    appointmentcheck?: AppointmentCheckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingServiceUpsertWithWhereUniqueWithoutPetInput = {
    where: BookingServiceWhereUniqueInput
    update: XOR<BookingServiceUpdateWithoutPetInput, BookingServiceUncheckedUpdateWithoutPetInput>
    create: XOR<BookingServiceCreateWithoutPetInput, BookingServiceUncheckedCreateWithoutPetInput>
  }

  export type BookingServiceUpdateWithWhereUniqueWithoutPetInput = {
    where: BookingServiceWhereUniqueInput
    data: XOR<BookingServiceUpdateWithoutPetInput, BookingServiceUncheckedUpdateWithoutPetInput>
  }

  export type BookingServiceUpdateManyWithWhereWithoutPetInput = {
    where: BookingServiceScalarWhereInput
    data: XOR<BookingServiceUpdateManyMutationInput, BookingServiceUncheckedUpdateManyWithoutPetInput>
  }

  export type BookingServiceScalarWhereInput = {
    AND?: BookingServiceScalarWhereInput | BookingServiceScalarWhereInput[]
    OR?: BookingServiceScalarWhereInput[]
    NOT?: BookingServiceScalarWhereInput | BookingServiceScalarWhereInput[]
    id?: IntFilter<"BookingService"> | number
    petId?: IntNullableFilter<"BookingService"> | number | null
    bookingId?: IntNullableFilter<"BookingService"> | number | null
    serviceId?: IntNullableFilter<"BookingService"> | number | null
  }

  export type UserCreateWithoutBookingInput = {
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
    pet?: PetCreateNestedManyWithoutUserInput
    appointmentcheck?: AppointmentCheckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
    pet?: PetUncheckedCreateNestedManyWithoutUserInput
    appointmentcheck?: AppointmentCheckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type AppointmentCheckCreateWithoutBookingInput = {
    User?: UserCreateNestedOneWithoutAppointmentcheckInput
  }

  export type AppointmentCheckUncheckedCreateWithoutBookingInput = {
    id?: number
    userId?: number | null
  }

  export type AppointmentCheckCreateOrConnectWithoutBookingInput = {
    where: AppointmentCheckWhereUniqueInput
    create: XOR<AppointmentCheckCreateWithoutBookingInput, AppointmentCheckUncheckedCreateWithoutBookingInput>
  }

  export type AppointmentCheckCreateManyBookingInputEnvelope = {
    data: AppointmentCheckCreateManyBookingInput | AppointmentCheckCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type BookingServiceCreateWithoutBookingInput = {
    Pet?: PetCreateNestedOneWithoutBookingserviceInput
    Service?: ServiceCreateNestedOneWithoutBookingserviceInput
  }

  export type BookingServiceUncheckedCreateWithoutBookingInput = {
    id?: number
    petId?: number | null
    serviceId?: number | null
  }

  export type BookingServiceCreateOrConnectWithoutBookingInput = {
    where: BookingServiceWhereUniqueInput
    create: XOR<BookingServiceCreateWithoutBookingInput, BookingServiceUncheckedCreateWithoutBookingInput>
  }

  export type BookingServiceCreateManyBookingInputEnvelope = {
    data: BookingServiceCreateManyBookingInput | BookingServiceCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingInput = {
    update: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateWithoutBookingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pet?: PetUpdateManyWithoutUserNestedInput
    appointmentcheck?: AppointmentCheckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pet?: PetUncheckedUpdateManyWithoutUserNestedInput
    appointmentcheck?: AppointmentCheckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentCheckUpsertWithWhereUniqueWithoutBookingInput = {
    where: AppointmentCheckWhereUniqueInput
    update: XOR<AppointmentCheckUpdateWithoutBookingInput, AppointmentCheckUncheckedUpdateWithoutBookingInput>
    create: XOR<AppointmentCheckCreateWithoutBookingInput, AppointmentCheckUncheckedCreateWithoutBookingInput>
  }

  export type AppointmentCheckUpdateWithWhereUniqueWithoutBookingInput = {
    where: AppointmentCheckWhereUniqueInput
    data: XOR<AppointmentCheckUpdateWithoutBookingInput, AppointmentCheckUncheckedUpdateWithoutBookingInput>
  }

  export type AppointmentCheckUpdateManyWithWhereWithoutBookingInput = {
    where: AppointmentCheckScalarWhereInput
    data: XOR<AppointmentCheckUpdateManyMutationInput, AppointmentCheckUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingServiceUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingServiceWhereUniqueInput
    update: XOR<BookingServiceUpdateWithoutBookingInput, BookingServiceUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingServiceCreateWithoutBookingInput, BookingServiceUncheckedCreateWithoutBookingInput>
  }

  export type BookingServiceUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingServiceWhereUniqueInput
    data: XOR<BookingServiceUpdateWithoutBookingInput, BookingServiceUncheckedUpdateWithoutBookingInput>
  }

  export type BookingServiceUpdateManyWithWhereWithoutBookingInput = {
    where: BookingServiceScalarWhereInput
    data: XOR<BookingServiceUpdateManyMutationInput, BookingServiceUncheckedUpdateManyWithoutBookingInput>
  }

  export type PetCreateWithoutBookingserviceInput = {
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender?: string | null
    user?: UserCreateNestedOneWithoutPetInput
  }

  export type PetUncheckedCreateWithoutBookingserviceInput = {
    id?: number
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender?: string | null
    userId?: number | null
  }

  export type PetCreateOrConnectWithoutBookingserviceInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutBookingserviceInput, PetUncheckedCreateWithoutBookingserviceInput>
  }

  export type BookingCreateWithoutBookingserviceInput = {
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    User?: UserCreateNestedOneWithoutBookingInput
    appointmentcheck?: AppointmentCheckCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutBookingserviceInput = {
    id?: number
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    userId?: number | null
    appointmentcheck?: AppointmentCheckUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutBookingserviceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBookingserviceInput, BookingUncheckedCreateWithoutBookingserviceInput>
  }

  export type ServiceCreateWithoutBookingserviceInput = {
    name: string
    description: string
  }

  export type ServiceUncheckedCreateWithoutBookingserviceInput = {
    id?: number
    name: string
    description: string
  }

  export type ServiceCreateOrConnectWithoutBookingserviceInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingserviceInput, ServiceUncheckedCreateWithoutBookingserviceInput>
  }

  export type PetUpsertWithoutBookingserviceInput = {
    update: XOR<PetUpdateWithoutBookingserviceInput, PetUncheckedUpdateWithoutBookingserviceInput>
    create: XOR<PetCreateWithoutBookingserviceInput, PetUncheckedCreateWithoutBookingserviceInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutBookingserviceInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutBookingserviceInput, PetUncheckedUpdateWithoutBookingserviceInput>
  }

  export type PetUpdateWithoutBookingserviceInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutBookingserviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingUpsertWithoutBookingserviceInput = {
    update: XOR<BookingUpdateWithoutBookingserviceInput, BookingUncheckedUpdateWithoutBookingserviceInput>
    create: XOR<BookingCreateWithoutBookingserviceInput, BookingUncheckedCreateWithoutBookingserviceInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutBookingserviceInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutBookingserviceInput, BookingUncheckedUpdateWithoutBookingserviceInput>
  }

  export type BookingUpdateWithoutBookingserviceInput = {
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    User?: UserUpdateOneWithoutBookingNestedInput
    appointmentcheck?: AppointmentCheckUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutBookingserviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentcheck?: AppointmentCheckUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type ServiceUpsertWithoutBookingserviceInput = {
    update: XOR<ServiceUpdateWithoutBookingserviceInput, ServiceUncheckedUpdateWithoutBookingserviceInput>
    create: XOR<ServiceCreateWithoutBookingserviceInput, ServiceUncheckedCreateWithoutBookingserviceInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBookingserviceInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBookingserviceInput, ServiceUncheckedUpdateWithoutBookingserviceInput>
  }

  export type ServiceUpdateWithoutBookingserviceInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUncheckedUpdateWithoutBookingserviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BookingServiceCreateWithoutServiceInput = {
    Pet?: PetCreateNestedOneWithoutBookingserviceInput
    Booking?: BookingCreateNestedOneWithoutBookingserviceInput
  }

  export type BookingServiceUncheckedCreateWithoutServiceInput = {
    id?: number
    petId?: number | null
    bookingId?: number | null
  }

  export type BookingServiceCreateOrConnectWithoutServiceInput = {
    where: BookingServiceWhereUniqueInput
    create: XOR<BookingServiceCreateWithoutServiceInput, BookingServiceUncheckedCreateWithoutServiceInput>
  }

  export type BookingServiceCreateManyServiceInputEnvelope = {
    data: BookingServiceCreateManyServiceInput | BookingServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BookingServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingServiceWhereUniqueInput
    update: XOR<BookingServiceUpdateWithoutServiceInput, BookingServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingServiceCreateWithoutServiceInput, BookingServiceUncheckedCreateWithoutServiceInput>
  }

  export type BookingServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingServiceWhereUniqueInput
    data: XOR<BookingServiceUpdateWithoutServiceInput, BookingServiceUncheckedUpdateWithoutServiceInput>
  }

  export type BookingServiceUpdateManyWithWhereWithoutServiceInput = {
    where: BookingServiceScalarWhereInput
    data: XOR<BookingServiceUpdateManyMutationInput, BookingServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutAppointmentcheckInput = {
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
    pet?: PetCreateNestedManyWithoutUserInput
    booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentcheckInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    createdAt?: Date | string
    updateAt?: Date | string
    role?: $Enums.Role
    pet?: PetUncheckedCreateNestedManyWithoutUserInput
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentcheckInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentcheckInput, UserUncheckedCreateWithoutAppointmentcheckInput>
  }

  export type BookingCreateWithoutAppointmentcheckInput = {
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    User?: UserCreateNestedOneWithoutBookingInput
    bookingservice?: BookingServiceCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutAppointmentcheckInput = {
    id?: number
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
    userId?: number | null
    bookingservice?: BookingServiceUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutAppointmentcheckInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAppointmentcheckInput, BookingUncheckedCreateWithoutAppointmentcheckInput>
  }

  export type UserUpsertWithoutAppointmentcheckInput = {
    update: XOR<UserUpdateWithoutAppointmentcheckInput, UserUncheckedUpdateWithoutAppointmentcheckInput>
    create: XOR<UserCreateWithoutAppointmentcheckInput, UserUncheckedCreateWithoutAppointmentcheckInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentcheckInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentcheckInput, UserUncheckedUpdateWithoutAppointmentcheckInput>
  }

  export type UserUpdateWithoutAppointmentcheckInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pet?: PetUpdateManyWithoutUserNestedInput
    booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentcheckInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pet?: PetUncheckedUpdateManyWithoutUserNestedInput
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithoutAppointmentcheckInput = {
    update: XOR<BookingUpdateWithoutAppointmentcheckInput, BookingUncheckedUpdateWithoutAppointmentcheckInput>
    create: XOR<BookingCreateWithoutAppointmentcheckInput, BookingUncheckedCreateWithoutAppointmentcheckInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutAppointmentcheckInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutAppointmentcheckInput, BookingUncheckedUpdateWithoutAppointmentcheckInput>
  }

  export type BookingUpdateWithoutAppointmentcheckInput = {
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    User?: UserUpdateOneWithoutBookingNestedInput
    bookingservice?: BookingServiceUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutAppointmentcheckInput = {
    id?: IntFieldUpdateOperationsInput | number
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingservice?: BookingServiceUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type PetCreateManyUserInput = {
    id?: number
    name: string
    type: string
    blood: string
    breed: string
    age: number
    gender?: string | null
  }

  export type BookingCreateManyUserInput = {
    id?: number
    datenow?: Date | string
    date: string
    time: string
    status?: $Enums.Status
  }

  export type AppointmentCheckCreateManyUserInput = {
    id?: number
    bookingId?: number | null
  }

  export type PetUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bookingservice?: BookingServiceUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bookingservice?: BookingServiceUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    blood?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUpdateWithoutUserInput = {
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    appointmentcheck?: AppointmentCheckUpdateManyWithoutBookingNestedInput
    bookingservice?: BookingServiceUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    appointmentcheck?: AppointmentCheckUncheckedUpdateManyWithoutBookingNestedInput
    bookingservice?: BookingServiceUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    datenow?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentCheckUpdateWithoutUserInput = {
    Booking?: BookingUpdateOneWithoutAppointmentcheckNestedInput
  }

  export type AppointmentCheckUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AppointmentCheckUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingServiceCreateManyPetInput = {
    id?: number
    bookingId?: number | null
    serviceId?: number | null
  }

  export type BookingServiceUpdateWithoutPetInput = {
    Booking?: BookingUpdateOneWithoutBookingserviceNestedInput
    Service?: ServiceUpdateOneWithoutBookingserviceNestedInput
  }

  export type BookingServiceUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingServiceUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AppointmentCheckCreateManyBookingInput = {
    id?: number
    userId?: number | null
  }

  export type BookingServiceCreateManyBookingInput = {
    id?: number
    petId?: number | null
    serviceId?: number | null
  }

  export type AppointmentCheckUpdateWithoutBookingInput = {
    User?: UserUpdateOneWithoutAppointmentcheckNestedInput
  }

  export type AppointmentCheckUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AppointmentCheckUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingServiceUpdateWithoutBookingInput = {
    Pet?: PetUpdateOneWithoutBookingserviceNestedInput
    Service?: ServiceUpdateOneWithoutBookingserviceNestedInput
  }

  export type BookingServiceUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingServiceUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingServiceCreateManyServiceInput = {
    id?: number
    petId?: number | null
    bookingId?: number | null
  }

  export type BookingServiceUpdateWithoutServiceInput = {
    Pet?: PetUpdateOneWithoutBookingserviceNestedInput
    Booking?: BookingUpdateOneWithoutBookingserviceNestedInput
  }

  export type BookingServiceUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}