package JavaPractice;

import java.util.*;

public class Demo {

    public static void main(String[] args) {
        System.out.println("=== 1. LIST DEMONSTRATION ===");
        demonstrateList();

        System.out.println("\n=== 2. SET DEMONSTRATION ===");
        demonstrateSet();

        System.out.println("\n=== 3. QUEUE DEMONSTRATION ===");
        demonstrateQueue();

        System.out.println("\n=== 4. MAP DEMONSTRATION ===");
        demonstrateMap();
    }

    // --- LISTS: Ordered, allows duplicates ---
    private static void demonstrateList() {
        // ArrayList is great for fast random access (reading).
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Apple"); // Duplicates are perfectly fine in a List
        
        System.out.println("ArrayList: " + arrayList);
        System.out.println("Element at index 1: " + arrayList.get(1));

        // LinkedList is better if you are doing a lot of insertions/deletions in the middle.
        List<String> linkedList = new LinkedList<>(arrayList);
        linkedList.addFirst("Mango"); // Specific to LinkedList (Requires Deque interface cast or direct class use)
        System.out.println("LinkedList after adding to front: " + linkedList);
    }

    // --- SETS: Unordered (usually), NO duplicates ---
    private static void demonstrateSet() {
        // HashSet is the fastest, but it does not guarantee any order.
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Zebra");
        hashSet.add("Ape");
        hashSet.add("Lion");
        hashSet.add("Zebra"); // This will be ignored; Sets don't allow duplicates
        
        System.out.println("HashSet (Notice the unpredictable order): " + hashSet);

        // TreeSet keeps elements automatically sorted.
        Set<String> treeSet = new TreeSet<>(hashSet);
        System.out.println("TreeSet (Automatically sorted alphabetically): " + treeSet);
    }

    // --- QUEUES: Order of processing (usually FIFO) ---
    private static void demonstrateQueue() {
        // PriorityQueue orders elements based on their natural ordering (or a custom Comparator).
        Queue<Integer> priorityQueue = new PriorityQueue<>();
        priorityQueue.offer(50);
        priorityQueue.offer(10);
        priorityQueue.offer(100);

        System.out.println("PriorityQueue (Smallest number comes out first):");
        while (!priorityQueue.isEmpty()) {
            // poll() retrieves and removes the head of the queue
            System.out.print(priorityQueue.poll() + " "); 
        }
        System.out.println();
    }

    // --- MAPS: Key-Value pairs, Keys must be unique ---
    private static void demonstrateMap() {
        // HashMap is the standard map. Fast, but no order guarantee.
        Map<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Alice", 25);
        hashMap.put("Bob", 30);
        hashMap.put("Charlie", 28);
        hashMap.put("Alice", 26); // Overwrites the previous value for the key "Alice"
        
        System.out.println("HashMap: " + hashMap);
        System.out.println("Bob's age is: " + hashMap.get("Bob"));

        // TreeMap keeps the keys sorted.
        Map<String, Integer> treeMap = new TreeMap<>(hashMap);
        System.out.println("TreeMap (Sorted by keys alphabetically): " + treeMap);
        
        // Iterating through a map
        System.out.println("Iterating through Map:");
        for (Map.Entry<String, Integer> entry : treeMap.entrySet()) {
            System.out.println(" - " + entry.getKey() + " is " + entry.getValue() + " years old.");
        }
    }
}