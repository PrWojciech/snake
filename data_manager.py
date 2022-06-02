import connection
from psycopg2.extras import RealDictCursor


@connection.connection_handler
def get_highest_scores(cursor: RealDictCursor):
    query = """
    SELECT username,score
    FROM users
    ORDER BY score DESC
    LIMIT 5"""
    cursor.execute(query)
    return cursor.fetchall()


@connection.connection_handler
def save_new_records(cursor: RealDictCursor, username, score):
    query = """
        INSERT INTO users(username, score)
        VALUES (%(username)s, %(score)s)
    """
    cursor.execute(query, {'username': username, 'score': score})
