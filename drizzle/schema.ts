import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, primaryKey, varchar, mysqlEnum } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const tokens = mysqlTable("tokens", {
	user: varchar("user", { length: 255 }).notNull(),
	accessToken: varchar("access_token", { length: 255 }).notNull(),
	refreshToken: varchar("refresh_token", { length: 255 }).notNull(),
	expiryDate: varchar("expiry_date", { length: 255 }),
},
(table) => {
	return {
		userIdx: index("user_idx").on(table.user),
		tokensUser: primaryKey(table.user),
	}
});

export const users = mysqlTable("users", {
	email: varchar("email", { length: 255 }).notNull(),
	role: mysqlEnum("role", ['creator','editor']),
},
(table) => {
	return {
		usersUser: primaryKey(table.email),
	}
});

export const workspace = mysqlTable("workspace", {
	id: varchar("id", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	creator: varchar("creator", { length: 255 }).notNull(),
	editor: varchar("editor", { length: 255 }),
},
(table) => {
	return {
		userIdx: index("user_idx").on(table.creator),
		workspaceUser: primaryKey(table.id),
	}
});